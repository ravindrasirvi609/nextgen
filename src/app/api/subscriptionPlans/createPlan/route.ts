import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Plan from "@/models/subscriptionModel";

connect();

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
      return;
    }

    const reqBody = await req.json();

    if (
      !reqBody.name ||
      !reqBody.price ||
      !reqBody.duration ||
      !reqBody.features ||
      !reqBody.benefits
    ) {
      return NextResponse.json(
        { error: "Incomplete request data" },
        { status: 400 }
      );
    }

    const { name, price, duration, features, benefits } = reqBody;
    const plan = new Plan({
      name: name,
      price: price,
      features: features,
      duration: duration,
      benefits: benefits,
    });
    await plan.save();

    return NextResponse.json(
      { message: "Plan added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding plan:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
