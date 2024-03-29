import { NextApiRequest, NextApiResponse } from "next";
import BlogPost from "@/models/blogModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method Not Allowed",
      message: "Only GET method is allowed for this route",
    });
  }

  try {
    const id = req.query.id as string;

    if (!id) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Missing 'id' parameter in request",
      });
    }

    const blogPost = await BlogPost.findById(id);

    if (!blogPost) {
      return res.status(404).json({
        error: "Not Found",
        message: `Blog post with ID ${id} not found`,
      });
    }

    return res.status(200).json(blogPost);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "Failed to fetch blog post",
    });
  }
}
