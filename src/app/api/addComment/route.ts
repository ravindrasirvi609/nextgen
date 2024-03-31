import { NextApiRequest, NextApiResponse } from "next";
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
    const commentData = await req.json(); // Destructuring blogData directly here
    console.log("Content and blogId --------:", commentData);

    const comment = new Comment(commentData); // Pass content and blogId directly to create Comment
    const savedComment = await comment.save(); // Save the new comment

    NextResponse.json(savedComment); // Return the saved comment in the response
  } catch (error) {
    console.error("Error adding comment:", error);
    NextResponse.json({
      error: "Internal Server Error",
      message: "Failed to add comment",
    });
  }
}
