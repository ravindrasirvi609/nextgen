"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Leadership = () => {
  const leaders = [
    {
      id: "1",
      name: "John Doe",
      position: "CEO",
      bio: "John Doe is the founder and CEO of NextGEN Leaders. With over 20 years of experience in leadership and business management, John has led the company to unprecedented growth and success. He is passionate about empowering the next generation of leaders and fostering innovation. Prior to founding NextGEN Leaders, John held executive positions at several Fortune 500 companies.",
      imageUrl:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      email: "john.doe@example.com",
      phone: "+1234567890",
      location: "New York, USA",
      education: "MBA, Harvard Business School",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: "2",
      name: "Jane Smith",
      position: "CTO",
      bio: "Jane Smith is the Chief Technology Officer at NextGEN Leaders. She leads the technology team with her expertise in software development and product management. Jane is dedicated to driving technological innovation and ensuring the highest standards of quality in our products. Prior to joining NextGEN Leaders, Jane worked as a technology consultant for top-tier tech firms.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      email: "jane.smith@example.com",
      phone: "+1987654321",
      location: "San Francisco, USA",
      education: "BSc in Computer Science, Stanford University",
      linkedin: "https://www.linkedin.com/in/janesmith",
    },
    {
      id: "3",
      name: "Michael Johnson",
      position: "COO",
      bio: "Michael Johnson serves as the Chief Operating Officer at NextGEN Leaders. With a background in operations management and strategic planning, Michael oversees the day-to-day operations of the company. He is committed to operational excellence and ensuring the efficient delivery of our services. Michael holds a Bachelor's degree in Business Administration from University of California, Berkeley.",
      imageUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      email: "michael.johnson@example.com",
      phone: "+1122334455",
      location: "Los Angeles, USA",
      education: "BS in Management, University of California, Berkeley",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get("/api/leaders/leaders-list");
        const data = await response.data;
        console.log("Leaders data:", data);
      } catch (error) {
        console.error("Error fetching leaders:", error);
      }
    };

    fetchLeaders();
  }, []);

  return (
    <div className="font-Inter h-screen overflow-auto bg-black py-40 px-4">
      <h1 className="text-6xl font-semibold text-center text-white mb-8">
        NextGEN Leaders
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader) => (
          <Link href={`/leadership/${leader.id}`} key={leader.id}>
            <div
              key={leader.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
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
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {leader.email}
                    </a>
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
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {leader.linkedin}
                    </a>
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
