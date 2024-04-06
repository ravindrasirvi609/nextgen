import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import RazorpayTransaction from "@/models/transactionModel";

connect();
export async function POST(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    const requestBody = await request.json();
    if (!requestBody) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }
    console.log("Request body", requestBody);

    const { orderId, paymentId, signature, amount, currency, status } =
      requestBody;

    const razorpayTransaction = new RazorpayTransaction({
      orderId,
      paymentId,
      signature,
      amount,
      currency,
      status,
      user: userId,
    });

    await razorpayTransaction.save();

    return NextResponse.json(
      {
        message: "Razorpay transaction saved successfully",
        transaction: razorpayTransaction.toObject(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
