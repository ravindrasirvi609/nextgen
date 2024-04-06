"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const RazorpayPaymentCapture: React.FC = () => {
  const [paymentInitialized, setPaymentInitialized] = useState(false);
  //      const [planDetails, setPlanDetails] = useState<planDetails>();

  useEffect(() => {
    initializeRazorpay();
  }, []);

  const handlePaymentCapture = () => {
    // Add your payment capture logic here
  };

  const makePayment = async () => {
    if (!paymentInitialized) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {
      const payload = {
        amount: "1000",
        currency: "INR",
        payment_capture: 1,
      };
      const response = await axios.post("/api/payments/rozorpay", payload);
      const data = response.data;

      const options = {
        name: "OPF",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you",
        handler: async function (response: any) {
          const payment = {
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            amount: data.amount,
            currency: data.currency,
            status: "success",
          };

          const resultRes = await axios.post(
            "/api/payments/transaction",
            payment
          );

          try {
            const json = {
              orderId: resultRes.data.transaction.orderId,
            };
            const invoiceResponse = await axios.post(
              "/api/payments/invoice",
              json,
              { responseType: "arraybuffer" }
            );

            const blob = new Blob([invoiceResponse.data], {
              type: "application/pdf",
            });

            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = `invoice_${data.id}.pdf`;

            document.body.appendChild(link);
            setTimeout(() => {
              link.click();

              document.body.removeChild(link);
            }, 1000);
          } catch (error) {
            console.error("Error downloading invoice:", error);
            Swal.fire("An error occurred while downloading the invoice.");
          }
        },
      };
      console.log("Invoice", options);

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error: any) {
      Swal.fire(error.message);
    }
  };

  const initializeRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      setPaymentInitialized(true);
    };
    script.onerror = () => {
      setPaymentInitialized(false);
    };
    document.body.appendChild(script);
  };
  return (
    <div className="font-Inter h-screen overflow-auto bg-white py-40">
      <div className="relative z-10 flex flex-col md:flex-row mt-10 items-center max-w-6xl justify-evenly mx-auto">
        <div className="md:w-1/3 mb-20 md:mb-0 mx-10">
          <div className="bg-gradient-to-r from-[#3e4044] to-[#1D2328] p-[1px] rounded-md mb-4">
            {paymentInitialized && (
              <button
                onClick={makePayment}
                className="bg-gradient-to-r from-[#2E3137] to-[#1D2328] rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-gray-300 font-bold"
              >
                Payment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RazorpayPaymentCapture;
