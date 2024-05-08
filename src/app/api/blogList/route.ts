import BlogPost from "@/models/blogModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET() {
  try {
    const blogPosts = await BlogPost.find().sort({ createdAt: -1 });

    const updatedBlogPosts = []; // Array to store updated blog posts

    for (const blogPost of blogPosts) {
      const userId = blogPost.author;
      const user = await User.findById(userId);

      // Create a new object with the updated authorName property
      const updatedBlogPost = {
        ...blogPost._doc,
        authorName: user.fullName,
      };

      updatedBlogPosts.push(updatedBlogPost); // Add updated blog post to the array
    }

    return NextResponse.json(updatedBlogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json({
      error: "Internal Server Error",
      message: "Failed to fetch blog posts",
    });
  }
}
