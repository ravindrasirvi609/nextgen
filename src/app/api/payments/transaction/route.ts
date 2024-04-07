import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import RazorpayTransaction from "@/models/transactionModel";
import User from "@/models/userModel";

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

    const { orderId, paymentId, signature, amount, currency, status, plan } =
      requestBody;

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    user.plan = plan;
    await user.save();

    const razorpayTransaction = new RazorpayTransaction({
      orderId,
      paymentId,
      signature,
      amount,
      currency,
      status,
      user: userId,
      plan,
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
