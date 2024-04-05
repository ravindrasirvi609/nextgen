import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import FAQ from "@/models/faqModel";

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
    await FAQ.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "FAQ deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
