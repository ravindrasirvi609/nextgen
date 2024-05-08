"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const LeadersDetails: React.FC = ({ params }: any) => {
  const id = params.id;
  const [leader, setLeader] = React.useState({
    _id: "",
    name: "",
    position: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    linkedin: "",
    imageUrl: "",
  });
  useEffect(() => {
    const fetchLeader = async () => {
      try {
        const response = await axios.post(`/api/leaders/leader-details`, {
          id,
        });
        const data = await response.data;
        setLeader(data.leader);
      } catch (error) {
        console.error("Error fetching leader:", error);
      }
    };

    fetchLeader();
  }, [id]);

  return (
    <div className="bg-gray-100 py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full mx-auto rounded-lg overflow-hidden">
            <Image
              src={leader.imageUrl}
              alt={leader.name}
              layout="responsive"
              width={400}
              height={300}
              className="object-cover rounded-lg shadow-lg object-center transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v15m0-15V3a9 9 0 0118 0v2a9 9 0 01-9 9H9a9 9 0 01-9-9V5a3 3 0 016 0z"
              />
            </svg>
            <span className="text-gray-700">{leader.email}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">{leader.name}</h2>
          <p className="text-lg font-semibold text-gray-600">
            {leader.position}
          </p>
          <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v15m0-15V3a9 9 0 0118 0v2a9 9 0 01-9 9H9a9 9 0 01-9-9V5a3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-700">{leader.phone}</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v15m0-15V3a9 9 0 0118 0v2a9 9 0 01-9 9H9a9 9 0 01-9-9V5a3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-700">{leader.location}</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v15m0-15V3a9 9 0 0118 0v2a9 9 0 01-9 9H9a9 9 0 01-9-9V5a3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-700">{leader.education}</span>
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Social Links
            </h3>
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {leader.linkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadersDetails;
