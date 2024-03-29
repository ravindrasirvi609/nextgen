import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import BlogPost from "@/models/blogModel";

connect();

export async function POST(req: NextRequest) {
      try {
            const blogDataFromBody = await req.json();
            console.log("blogDataFromBody:", blogDataFromBody);

            const newBlogPost = new BlogPost(blogDataFromBody);
            const savedBlogPost = await newBlogPost.save();
            return NextResponse.json({ message: "Blog post added successfully", blogPost: savedBlogPost });
      } catch (error: any) {
            console.error("Error adding blog post:", error);

            if (error.name === 'ValidationError') {
                  // Validation errors
                  const validationErrors = Object.values(error.errors).map((error: any) => error.message);
                  return NextResponse.json({ error: "Validation failed", details: validationErrors }, { status: 400 });
            } else {
                  // Other errors
                  return NextResponse.json({ error: "Failed to add blog post" }, { status: 500 });
            }
      }
}
