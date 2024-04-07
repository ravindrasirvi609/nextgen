import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Testimonials from "@/models/testimonialModel";

connect();

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }

    const reqBody = await req.json();

    if (
      !reqBody.name ||
      !reqBody.role ||
      !reqBody.message ||
      reqBody.rating === undefined
    ) {
      return NextResponse.json(
        { error: "Incomplete request data" },
        { status: 400 }
      );
    }

    const { name, role, message, rating } = reqBody;
    const testimonial = new Testimonials({
      name: name,
      role: role,
      message: message,
      rating: rating,
    });
    await testimonial.save();

    return NextResponse.json(
      { message: "Testimonial added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding testimonial:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
