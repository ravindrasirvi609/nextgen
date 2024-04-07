import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import RazorpayTransaction from "@/models/transactionModel";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Plan from "@/models/subscriptionModel";

connect();

async function generateInvoiceHtml(orderId: string): Promise<string> {
  try {
    const transactionData = await RazorpayTransaction.findOne({
      orderId,
    }).exec();

    console.log("Transaction Data:", transactionData);

    const userData = await User.findById(transactionData.user);

    const planDetails = await Plan.findById(transactionData.plan);

    if (!transactionData) {
      throw new Error(`No transaction data found for order ID ${orderId}`);
    }

    const invoiceHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice</title>
    <style>
        /* Your CSS styles here */
        .bill-to,
        .bill-to1,
        .bill-to6,
        .title,
        .subject,
        .invoice-number,
        .bill-to8,
        .total-due-title1,
        .quantity3 {
            font-family: 'Manrope', sans-serif;
        }
        .invoice {
            position: relative;
            border-radius: 5px;
            border: 1px dashed #9747ff;
            box-sizing: border-box;
            width: 100%;
            height: 1644px;
            overflow: hidden;
            text-align: left;
            font-size: 16px;
            color: #333;
        }
        .property-1default {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #fff;
            width: 612px;
            height: 792px;
            overflow: hidden;
        }
        .footer {
            position: absolute;
            bottom: 0;
            left: 0;
            border-top: 1px solid #ccc;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 20px;
        }
        .contact, .payment {
            display: flex;
            flex-direction: column;
        }
        .bill-to, .bill-to1, .bill-to6 {
            margin-bottom: 10px;
        }
        .auto-layout {
            position: absolute;
            top: 90px;
            left: 20px;
            width: calc(100% - 40px);
        }
        .header, .client, .items-list {
            margin-bottom: 20px;
        }
        .header {
            display: flex;
            justify-content: space-between;
        }
        .sender, .invoice-details {
            width: 48%;
        }
        .subject p {
            margin: 5px 0;
        }
        .invoice-details div {
            margin-bottom: 10px;
        }
        .client {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        .items-list .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            padding: 10px 0;
        }
        .title-description {
            width: 60%;
        }
        .description {
            font-size: 14px;
            opacity: 0.8;
        }
        .quantity2, .charges2 {
            width: 20%;
            text-align: center;
        }
        .total-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-top: 20px;
        }
    </style>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap">
</head>
<body>
    <div class="invoice">
        <div class="property-1default">
            <!-- Footer Section -->
            <div class="footer">
                <div class="contact">
                    <div class="bill-to">Contact:</div>
                    <div class="bill-to1">Phone: +91 8107199052</div>
                    <div class="bill-to1">Email: sirviravirandra609@gmail.com</div>
                </div>
                <div class="payment">
                    <div class="bill-to">Payment:</div>
                    <div class="bill-to1">Payable to RazorPay</div>
                    <div class="bill-to1">Account number, Bank</div>
                    <div class="bill-to6">*Please make payment before due date</div>
                </div>
            </div>
            <!-- Main Content Section -->
            <div class="auto-layout">
                <!-- Header Section -->
                <div class="header">
                    <div class="sender">
                        <div class="title">Invoice</div>
                        <div class="subject">
                            <p class="from"><b>From:</b></p>
                            <p class="from">NextGEN Leaders</p>
                            <p class="from">Pali Rajsthan</p>
                        </div>
                    </div>
                    <div class="invoice-details">
                        <div class="invoice-number-title-parent">
                            <div class="invoice-number-title">Payment Id:</div>
                            <div class="issue-date-title">Payment Date</div>
                        </div>
                        <div class="invoice-number-parent">
                            <div class="invoice-number">${
                              transactionData.paymentId
                            }</div>
                            <div class="invoice-number">${transactionData.createdAt.toString()}</div>
                        </div>
                    </div>
                </div>
                <!-- Client Section -->
                <div class="client">
                    <div class="contact">
                        <div class="bill-to">Bill To:</div>
                        <div class="bill-to8">${userData.fullName}</div>
                        <div class="bill-to8"><!-- Dynamic Client Address --></div>
                        <div class="bill-to8">Phone: ${
                          userData.number
                        } , Email: ${userData.email} </div>
                    </div>
                    <div class="total-due">
                        <div class="total-due-title">Total Amount:</div>
                        <div class="total-due-title1">${
                          transactionData.amount
                        }</div>
                    </div>
                </div>
                <!-- Items List Section -->
                <div class="items-list">
                    <div class="index1">
                        <div class="deliverables">
                            <b class="charges">Deliverables</b>
                        </div>
                        <div class="quantity">
                            <b class="charges">Quantity</b>
                        </div>
                        <div class="charges1">
                            <b class="charges">Charges</b>
                        </div>
                    </div>
                    <div class="item">
                        <div class="title-description">
                            <div class="title1">${planDetails.name}</div>
                            <div class="description">${
                              planDetails.features
                            }</div>
                        </div>
                        <div class="quantity2">1</div>
                        <div class="charges2">${planDetails.price}</div>
                    </div>
                    <!-- Additional items can be added dynamically here -->
                </div>
                <!-- Total Amount Section -->
                <div class="total-row">
                    <div class="amount">
                        <div class="title7">Total:</div>
                    </div>
                    <div class="amount2">${transactionData.amount}</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>


    `;
    return invoiceHtml;
  } catch (error) {
    console.error("Error generating invoice HTML:", error);
    throw error;
  }
}

export async function POST(req: NextRequest) {
  try {
    // Extract order ID from the request body
    const requestBody = await req.json();
    console.log("Request Body:", requestBody);

    // Validate request body and order ID
    if (!requestBody || !requestBody.orderId) {
      return NextResponse.json(
        { message: "Invalid request body. Missing order ID." },
        { status: 400 }
      );
    }

    const { orderId } = requestBody;

    // Generate the invoice HTML using transaction data
    const invoiceHtml = await generateInvoiceHtml(orderId);

    // Generate the invoice PDF using Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"], // Add this line for running in certain environments
    });
    const page = await browser.newPage();
    await page.setContent(invoiceHtml);
    const pdfBuffer = await page.pdf();
    console.log("PDF generated successfully", pdfBuffer);

    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Disposition": `attachment; filename="invoice_${orderId}.pdf"`,
        "Content-Type": "application/pdf",
      },
    });
  } catch (err) {
    console.error("Error generating invoice PDF:", err);
    return new NextResponse(
      "An error occurred while generating the invoice. Please try again.",
      {
        status: 500,
      }
    );
  }
}
