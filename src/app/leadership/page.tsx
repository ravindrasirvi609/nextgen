"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";

interface Leader {
  _id: string;
  name: string;
  position: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  linkedin: string;
  imageUrl: string;
}

const Leadership = () => {
  const [leaders, setLeaders] = React.useState<Leader[]>([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get("/api/leaders/leaders-list");
        const data = await response.data;
        setLeaders(data.leaders);
      } catch (error) {
        console.error("Error fetching leaders:", error);
      }
    };

    fetchLeaders();
  }, []);

  return (
    <div className="font-Inter h-screen overflow-auto bg-black py-40 px-4">
      <Head>
        <title>Leadership - Nexgen Leaders</title>
        <meta
          name="description"
          content="Meet the leadership team at Nexgen Leaders. Our experts bring you the latest news and insights on startups and the pharmaceutical industry, driving innovation and growth."
        />
        <meta
          name="keywords"
          content="Nexgen Leaders leadership, leadership team, startup news, pharma news, pharmaceutical industry experts, business leaders, innovation, biotech, healthcare, entrepreneurship"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Leadership - Nexgen Leaders" />
        <meta
          property="og:description"
          content="Meet the leadership team at Nexgen Leaders. Our experts bring you the latest news and insights on startups and the pharmaceutical industry, driving innovation and growth."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.nextgenleaders.vip/leadership"
        />
        <meta
          property="og:image"
          content="https://www.nextgenleaders.vip/path-to-your-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NextgenLeaders" />
        <meta name="twitter:title" content="Leadership - Nexgen Leaders" />
        <meta
          name="twitter:description"
          content="Meet the leadership team at Nexgen Leaders. Our experts bring you the latest news and insights on startups and the pharmaceutical industry, driving innovation and growth."
        />
        <meta
          name="twitter:image"
          content="https://www.nextgenleaders.vip/path-to-your-image.jpg"
        />
      </Head>
      <h1 className="text-6xl font-semibold text-center text-white mb-8">
        NextGEN Leaders
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader: Leader) => (
          <Link href={`/leadership/${leader._id}`} key={leader._id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg">
              <Image
                src={leader.imageUrl}
                alt={leader.name}
                layout="responsive"
                width={800}
                height={600}
                className="object-cover object-center transition-transform duration-300 transform hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-black mb-2">
                  {leader.name}
                </h2>
                <p className="text-gray-600 mb-2">{leader.position}</p>
                <p className="text-gray-700 mb-4">{leader.bio}</p>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-600 mb-1">
                    Email:{" "}
                    <Link
                      href={`mailto:${leader.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {leader.email}
                    </Link>
                  </p>
                  <p className="text-gray-600 mb-1">Phone: {leader.phone}</p>
                  <p className="text-gray-600 mb-1">
                    Location: {leader.location}
                  </p>
                  <p className="text-gray-600 mb-1">
                    Education: {leader.education}
                  </p>
                  <p className="text-gray-600 mb-1">
                    LinkedIn:{" "}
                    <Link
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {leader.linkedin}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
