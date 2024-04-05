import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import FAQ from "@/models/faqModel";

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

    if (!reqBody.question || !reqBody.answer) {
      return NextResponse.json(
        { error: "Incomplete request data" },
        { status: 400 }
      );
    }

    const { question, answer } = reqBody;
    const faq = new FAQ({
      question: question,
      answer: answer,
    });
    await faq.save();

    return NextResponse.json(
      { message: "FAQ added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding FAQ:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
