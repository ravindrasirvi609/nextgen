"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog: React.FC = ({ params }: any) => {
  const id = params.id;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<
    {
      author: string;
      content: string;
      createdAt: Date;
    }[]
  >([]);

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

  useEffect(() => {
    const fetchComment = async () => {
      setIsCommentLoading(true);
      setError(null);
      try {
        const response = await axios.post(`/api/commentList`, { id: id }); // Corrected query parameter syntax
        console.log("response", response.data);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error); // Corrected console log message
        setError("Failed to load comments. Please try again later.");
      } finally {
        setIsCommentLoading(false);
      }
    };

    fetchComment();
  }, [id]);

  const handleAddComment = async (comment: string) => {
    try {
      const newComment = {
        content: comment,
        createdAt: new Date(),
        blog: id,
        author: "Anonymous",
      };
      await onSubmit(newComment, resetForm);
      setComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const onSubmit = async (data: any, reset: () => void) => {
    try {
      const response = await axios.post("/api/addComment", data);
      console.log("Comment added successfully:", response.data);
      reset();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const resetForm = () => {
    // Reset form logic here
  };

  function formatDate(dateString: string | number | Date) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} : ${hours}:${minutes}`;
  }

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
      {/* Comment Section */}
      <div className="m-16">
        <h2 className="text-2xl text-gray-800 font-bold mb-4">Comments</h2>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block font-bold mb-2 text-gray-800"
          >
            Add Comment
          </label>
          <input
            type="text"
            id="comment"
            className="border border-gray-300 text-gray-700 rounded w-full p-2"
            placeholder="Type your comment..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddComment(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
          />
        </div>
        <ul className="pb-32">
          {Array.isArray(comments) &&
            comments.map((comment, index) => (
              <li key={index} className="mb-2 text-gray-700">
                <div>
                  <strong>{comment.author}</strong>: {comment.content}
                </div>
                <div className="text-xs text-gray-500">
                  {formatDate(comment.createdAt)}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
