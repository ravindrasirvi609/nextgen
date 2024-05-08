"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface planDetails {
  features?: string[];
  benefits?: string[];
  name?: string;
  planId?: string;
  price: number;
  currency: string;
}

const RazorpayPaymentCapture: React.FC = ({ params }: any) => {
  const pramsId = params;

  const [paymentInitialized, setPaymentInitialized] = useState(false);
  const [planDetails, setPlanDetails] = useState<planDetails>();

  useEffect(() => {
    getEventDetails(pramsId);
    initializeRazorpay();
  }, [pramsId]);

  const getEventDetails = async (id: string) => {
    const response = await axios.post("/api/subscriptionPlans/planDetails", id);

    const planDetails = {
      price: response.data.data.price,
      currency: "INR",
      planId: response.data.data._id,
      name: response.data.data.name,
      features: response.data.data.features,
      benefits: response.data.data.benefits,
    };

    setPlanDetails(planDetails);
  };

  const makePayment = async () => {
    if (!paymentInitialized) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {
      const payload = {
        amount: 1,
        currency: "INR",
        payment_capture: 1,
      };
      const response = await axios.post("/api/payments/rozorpay", payload);
      const data = response.data;

      const options = {
        name: "NextGEN Leaders",
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
            plan: planDetails?.planId,
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
    <div className="font-Inter h-screen overflow-auto bg-white py-40 px-4">
      <h1 className="text-3xl font-semibold text-center text-black mb-8">
        Subscribe Now
      </h1>
      <div className="max-w-lg mx-auto border border-gray-200 bg-black p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
        <h2 className="text-xl font-semibold mb-4">
          Selected Plan : {planDetails?.name}
        </h2>
        <p className="text-lg mb-2">
          Price: {planDetails?.price} {planDetails?.currency}
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul className="list-disc pl-5">
            {planDetails?.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Benefits:</h3>
          <ul className="list-disc pl-5">
            {planDetails?.benefits?.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={makePayment}
          disabled={!paymentInitialized}
          className={`w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow-md ${
            paymentInitialized
              ? "hover:bg-blue-600"
              : "opacity-50 cursor-not-allowed"
          } transition-all duration-300 transform hover:scale-105`}
        >
          {paymentInitialized ? "Proceed to Payment" : "Loading..."}
        </button>
      </div>
      <footer className="mt-8 text-center text-gray-500">
        <p>Powered by Razorpay</p>
      </footer>
    </div>
  );
};

export default RazorpayPaymentCapture;
