import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Plan from "@/models/subscriptionModel";

connect();

export async function DELETE(req: NextRequest) {
  try {
    if (req.method !== "DELETE") {
      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }

    const reqBody = await req.json();

    if (!reqBody.id) {
      return NextResponse.json(
        { error: "Incomplete request data" },
        { status: 400 }
      );
    }

    const planId = reqBody.id;
    const plan = await Plan.findByIdAndDelete(planId);

    if (!plan) {
      return NextResponse.json({ message: "Plan not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Plan deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting plan:", error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
