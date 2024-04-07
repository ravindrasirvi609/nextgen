import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Testimonials from "@/models/testimonialModel";

connect();

export async function GET(req: NextRequest) {
  try {
    if (req.method !== "GET") {
      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }

    const testimonials = await Testimonials.find();

    return NextResponse.json({ data: testimonials }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving testimonials:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
