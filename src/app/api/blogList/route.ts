import { NextApiRequest, NextApiResponse } from "next";
import BlogPost from "@/models/blogModel";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const blogPosts = await BlogPost.find().sort({ createdAt: -1 });
    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json({
      error: "Internal Server Error",
      message: "Failed to fetch blog posts",
    });
  }
}
