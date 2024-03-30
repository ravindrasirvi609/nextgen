"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog: React.FC = ({ params }: any) => {
  const id = params.id;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  interface BlogPost {
    title: string;
    content: string;
  }

  useEffect(() => {
    const fetchBlogDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.post(`/api/blogDetails`, { id: id });
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBlogDetails();
    }
  }, [id]);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-44">
        {isLoading ? (
          <p>Loading blog post...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : blog ? (
          <>
            <h1 className="text-2xl text-gray-800 font-bold mb-4">
              {blog.title}
            </h1>
            <p className="text-gray-700">{blog.content}</p>
          </>
        ) : (
          <p>Blog post not found.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
