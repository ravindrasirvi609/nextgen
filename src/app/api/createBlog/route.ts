import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import BlogPost from "@/models/blogModel";
import { uploadToCloudinary } from "@/cloudinaryConfig/cloudinaryConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

connect();

export async function POST(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }
    // const user = await User.findById(userId);
    // if (!user) {
    //   return NextResponse.json({ error: "User not found" }, { status: 404 });
    // }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const fileBuffer = await file.arrayBuffer();
    const mimeType = file.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");
    const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;
    const res = await uploadToCloudinary(fileUri, file.name);
    console.log("Cloudinary response:", res);

    let message = "failure";
    let imgUrl = "";

    if (res.success && res.result) {
      message = "success";
      imgUrl = res.result.secure_url;

      const { title, content } = Object.fromEntries(formData.entries());

      const newBlogPost = new BlogPost({
        title,
        content,
        imageUrl: imgUrl,
        author: userId,
      });

      const savedBlogPost = await newBlogPost.save();
      console.log("Blog post added successfully:", savedBlogPost);
      return NextResponse.json({
        message: "Blog post added successfully",
        blogPost: savedBlogPost,
      });
    }
  } catch (error: any) {
    console.error("Error adding blog post:", error);

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (error: any) => error.message
      );
      return NextResponse.json(
        { error: "Validation failed", details: validationErrors },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to add blog post" },
        { status: 500 }
      );
    }
  }
}
