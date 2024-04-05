import User from "@/models/userModel";

import { sendEmail } from "@/helpers/mailer";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

const SALT_ROUNDS = 10;

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    // Validate request data
    if (!reqBody.fullName || !reqBody.email || !reqBody.password) {
      return NextResponse.json(
        { error: "Incomplete request data" },
        { status: 400 }
      );
    }

    const { fullName, email, password } = reqBody;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const savedUser = await createUser(fullName, email, hashedPassword);

    await sendVerificationEmail(savedUser.email, savedUser._id);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

async function createUser(fullName: string, email: string, password: string) {
  const newUser = new User({
    fullName,
    email,
    password,
  });

  return await newUser.save();
}

async function sendVerificationEmail(email: string, userId: string) {
  await sendEmail({ email, emailType: "VERIFY", userId });
}
