import { connect } from "@/dbConfig/dbConfig";
import Testimonials from "@/models/testimonialModel";
import { NextRequest, NextResponse } from "next/server";

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

    const { id } = reqBody;
    const testimonial = await Testimonials.findById(id);

    if (!testimonial) {
      return NextResponse.json(
        { message: "Testimonial not found" },
        { status: 404 }
      );
    }

    await Testimonials.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Testimonial deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
