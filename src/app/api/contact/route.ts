import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import contactForm from "@/models/contactModel";

connect();

export async function POST(req: NextRequest) {
      try {
            const userDataFromBody = await req.json();
            console.log("userDataFromBody:", userDataFromBody);

            const newUser = new contactForm(userDataFromBody);

            await newUser.save();

            return NextResponse.json({ message: "User added successfully", user: newUser });
      } catch (error: any) {
            console.error("Error adding user:", error);
            return NextResponse.error(); // Remove the argument from the function call
      }
}
