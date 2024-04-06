import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import FAQ from "@/models/faqModel";

connect();

export async function GET(req: NextRequest) {
  try {
    if (req.method !== "GET") {
      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }

    const faqs = await FAQ.find().sort({ createdAt: -1 });

    return NextResponse.json({ data: faqs }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving FAQs:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
