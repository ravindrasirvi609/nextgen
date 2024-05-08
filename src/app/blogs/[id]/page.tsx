"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

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
    [x: string]: string | number | Date;
    title: string;
    content: string;
    author: string;
    imageUrl: string;
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
    <div className="bg-gray-900">
      <div className="container mx-auto py-36">
        {isLoading ? (
          <p className="text-center text-gray-700">Loading blog post...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : blog ? (
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-72">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h1 className="text-3xl text-gray-800 font-bold mb-4">
                {blog.title}
              </h1>
              <p className="text-gray-500 mb-4">
                {formatDate(blog.createdAt)} by {blog.author}
              </p>
              <p
                className="text-gray-700 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-700">Blog post not found.</p>
        )}
      </div>
      {/* Comment Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-500 mb-4">Comments</h2>
        <div className="mb-8">
          <label
            htmlFor="comment"
            className="block font-bold mb-2 text-gray-600"
          >
            Add Comment
          </label>
          <input
            type="text"
            id="comment"
            className="border border-gray-300 text-gray-700 rounded w-full px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Type your comment..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddComment(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
          />
        </div>
        <ul>
          {Array.isArray(comments) &&
            comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="text-gray-800 mb-2">
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
