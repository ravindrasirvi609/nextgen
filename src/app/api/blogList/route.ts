import BlogPost from "@/models/blogModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET() {
  try {
    const blogPosts = await BlogPost.find().sort({ createdAt: -1 });

    for (const blogPost of blogPosts) {
      const userId = blogPost.author;
      const user = await User.findById(userId);
      blogPost.author = user.fullName;
    }

    console.log("Blog posts fetched successfully:", blogPosts);

    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json({
      error: "Internal Server Error",
      message: "Failed to fetch blog posts",
    });
  }
}
