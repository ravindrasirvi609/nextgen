"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const TestimonialListPage: React.FC = () => {
  const [testimonialList, setTestimonialList] = useState([]);

  useEffect(() => {
    fetchTestimonialList();
  }, []);

  const fetchTestimonialList = async () => {
    try {
      const response = await axios.get("/api/testimonial/testimonial-list");
      setTestimonialList(response.data.data);
    } catch (error) {
      console.error("Error fetching testimonial list:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `/api/testimonial/delete-testimonial`,
        {
          data: { id }, // Include id in the request body
        }
      );
      fetchTestimonialList();
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  return (
    <div className="container mx-auto p-8 sm:p-12 lg:p-16">
      <h1 className="text-3xl md:text-4xl text-center mb-8 py-40 text-blue-600">
        Testimonial List
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8 transition duration-300 transform hover:scale-105">
        <Link href={"/admin/testimonial/create-testimonial"}>
          Create Testimonial
        </Link>
      </button>
      <table className="min-w-full border-collapse border bg-orange-300 border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Message</th>
            <th className="border border-gray-300 px-4 py-2">Rating</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(testimonialList) &&
            testimonialList.map((testimonial: any) => (
              <tr key={testimonial.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {testimonial.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {testimonial.role}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {testimonial.message}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {testimonial.rating}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                  <button
                    onClick={() => handleDelete(testimonial._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
                  >
                    <i className="fas fa-trash-alt mr-2"></i>
                    Delete
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
                    <i className="fas fa-edit mr-2"></i>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestimonialListPage;
