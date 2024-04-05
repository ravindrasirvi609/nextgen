import { NextApiResponse } from "next";
import BlogPost from "@/models/blogModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

connect();

export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
      message: "Only POST method is allowed for this route",
    });
  }

  try {
    const blogData = await req.json();
    const id = blogData.id;

    if (!id) {
      return NextResponse.json({
        error: "Bad Request",
        message: "Missing 'id' parameter in request",
      });
    }

    const blogPost = await BlogPost.findById(id);
    const userId = blogPost.author;

    const user = await User.findById(userId);
    blogPost.author = user.fullName;

    if (!blogPost) {
      return NextResponse.json({
        error: "Not Found",
        message: `Blog post with ID ${id} not found`,
      });
    }

    return NextResponse.json(blogPost);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json({
      error: "Internal Server Error",
      message: "Failed to fetch blog post",
    });
  }
}
