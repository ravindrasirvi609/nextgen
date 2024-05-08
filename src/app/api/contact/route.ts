import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import contactForm from "@/models/contactModel";

connect();

export async function POST(req: NextRequest) {
  try {
    const userDataFromBody = await req.json();
    const newUser = new contactForm(userDataFromBody);
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User added successfully",
      user: savedUser,
    });
  } catch (error: any) {
    console.error("Error adding user:", error);

    if (error.name === "ValidationError") {
      // Validation errors
      const validationErrors = Object.values(error.errors).map(
        (error: any) => error.message
      );
      return NextResponse.json(
        { error: "Validation failed", details: validationErrors },
        { status: 400 }
      );
    } else {
      // Other errors
      return NextResponse.json(
        { error: "Failed to add user" },
        { status: 500 }
      );
    }
  }
}
