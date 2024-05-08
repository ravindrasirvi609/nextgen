import Comment from "@/models/commentModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    try {
      const { id } = await req.json();

      if (!id) {
        return NextResponse.json({
          error: "Missing id",
          message: "Please provide an id query parameter",
        });
      }

      const comments = await Comment.find({ blog: id });
      return NextResponse.json(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
      return NextResponse.json({
        error: "Internal Server Error",
        message: "Failed to fetch comments",
      });
    }
  } else {
    return NextResponse.json({
      error: "Method Not Allowed",
      message: "Only GET method is allowed for this route",
    });
  }
}
