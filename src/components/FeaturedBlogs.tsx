"use client";
import React, { useState, useEffect } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

function FeaturedBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogList");

        setBlogs(response.data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // Handle error, e.g., show an error message to the user
      }
    };

    fetchBlogs();
  }, []);

  const limitContent = (content: string, limit: number) => {
    const words = content.split(" ");
    const limitedWords = words.slice(0, limit);
    return limitedWords.join(" ");
  };

  return (
    <>
      <div className="bg-black ">
        <div className="mx-auto sm:m-0 text-3xl font-bold text-center">
          Featured Blogs
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
            >
              <BackgroundGradient className="rounded-lg max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900">
                <Image
                  src={(blog as { imageUrl: string }).imageUrl}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <div className="mb-6">
                  <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
                    {(blog as { title: string }).title}
                  </p>
                  <p
                    className="text-sm text-neutral-600 dark:text-neutral-400"
                    dangerouslySetInnerHTML={{
                      __html: limitContent(
                        (blog as { content: string }).content,
                        10
                      ),
                    }}
                  />
                </div>
                <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-2 text-xs sm:text-sm font-bold dark:bg-zinc-800">
                  <Link href={`/blogs/${(blog as { _id: string })._id}`}>
                    <span className="mx-auto text-center">Read now</span>
                  </Link>
                </button>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedBlogs;
