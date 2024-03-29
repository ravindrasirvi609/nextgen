import { NextApiRequest, NextApiResponse } from "next";
import BlogPost from "@/models/blogModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return NextResponse.json({
      error: "Method Not Allowed",
      message: "Only POST method is allowed for this route",
    });
  }

  const { id } = req.query;

  try {
    const blogPost = await BlogPost.findById(id);

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
