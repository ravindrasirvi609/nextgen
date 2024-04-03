"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogList");
        console.log("Blogs:", response.data);

        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // Handle error, e.g., show an error message to the user
      }
    };

    fetchBlogs();
  }, []);

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
    <div className="container mx-auto py-44">
      <h1 className="text-4xl font-bold text-center mb-8">
        NextGen Leaders Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(
          (blog: {
            _id: string;
            imageUrl: string;
            title: string;
            content: string;
            author: string;
            createdAt: string;
          }) => (
            <div key={blog._id} className="bg-white p-6 shadow-lg rounded-lg">
              <Link href={`/blogs/${blog._id}`}>
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                  <Image
                    src="https://images.unsplash.com/photo-1492681290082-e932832941e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt={blog.title}
                    layout="fill"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2 text-gray-900"></h2>
                <h2 className="text-xl font-bold mb-2 text-gray-900">
                  {blog.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {blog.content.split(" ").slice(0, 30).join(" ")}
                </p>
                <p className="text-gray-500">Author: {blog.author}</p>
                <p className="text-gray-600">
                  Created at: {formatDate(blog.createdAt)}
                </p>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Blogs;
