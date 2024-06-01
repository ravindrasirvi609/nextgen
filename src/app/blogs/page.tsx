"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

interface Blog {
  _id: string;
  imageUrl: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  authorName: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogList");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const limitContent = (content: string, limit: number) => {
    const words = content.split(" ");
    const limitedWords = words.slice(0, limit);
    return limitedWords.join(" ");
  };

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} : ${hours}:${minutes}`;
  };

  return (
    <div className="container mx-auto py-44">
      <Head>
        <title>Blog - Nexgen Leaders</title>
        <meta
          name="description"
          content="Explore the latest articles, insights, and trends in startups and the pharmaceutical industry on the Nexgen Leaders blog. Stay informed with expert analysis and commentary."
        />
        <meta
          name="keywords"
          content="Nexgen Leaders blog, startup news, pharma news, pharmaceutical industry blog, business insights, innovation trends, biotech, healthcare, entrepreneur articles"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blog - Nexgen Leaders" />
        <meta
          property="og:description"
          content="Explore the latest articles, insights, and trends in startups and the pharmaceutical industry on the Nexgen Leaders blog. Stay informed with expert analysis and commentary."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nextgenleaders.vip/blog" />
        <meta
          property="og:image"
          content="https://www.nextgenleaders.vip/path-to-your-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NextgenLeaders" />
        <meta name="twitter:title" content="Blog - Nexgen Leaders" />
        <meta
          name="twitter:description"
          content="Explore the latest articles, insights, and trends in startups and the pharmaceutical industry on the Nexgen Leaders blog. Stay informed with expert analysis and commentary."
        />
        <meta
          name="twitter:image"
          content="https://www.nextgenleaders.vip/path-to-your-image.jpg"
        />
      </Head>
      <h1 className="text-4xl font-bold text-center mb-8">
        NextGen Leaders Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-6 shadow-lg rounded-lg">
            <Link href={`/blogs/${blog._id}`}>
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  layout="fill"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-900">
                {blog.title}
              </h2>
              <p
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{
                  __html: limitContent(blog.content, 30),
                }}
              />
              <p className="text-gray-500">Author: {blog.authorName}</p>
              <p className="text-gray-600">
                Created at: {formatDate(blog.createdAt)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
