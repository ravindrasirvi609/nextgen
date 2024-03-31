import Comment from "@/models/commentModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method !== "POST") {
    return NextResponse.json({
      error: "Method Not Allowed",
      message: "Only POST method is allowed for this route",
    });
  }

  try {
    const commentData = await req.json();
    const comment = new Comment(commentData);
    const savedComment = await comment.save();
    return NextResponse.json(savedComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json({
      error: "Internal Server Error",
      message: "Failed to add comment",
    });
  }
}
