"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const FaqListPage: React.FC = () => {
  const [faqList, setFaqList] = useState([]);

  useEffect(() => {
    fetchFaqList();
  }, []);

  const fetchFaqList = async () => {
    try {
      const response = await axios.get("/api/faq/faqList");
      setFaqList(response.data.data);
    } catch (error) {
      console.error("Error fetching FAQ list:", error);
    }
  };

  const handleDelete = async (faqId: string) => {
    try {
      await axios.delete(`/api/faq/deleteFaq/${faqId}`);
      fetchFaqList();
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  return (
    <div className="container mx-auto p-8 sm:p-12 lg:p-16">
      <h1 className="text-3xl md:text-4xl text-center mb-8 py-40 text-blue-600">
        FAQ List
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8 transition duration-300 transform hover:scale-105">
        <Link href={"/admin/faq/create-faq"}>Create FAQ</Link>
      </button>
      <table className="min-w-full border-collapse border bg-orange-300 border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Question</th>
            <th className="border border-gray-300 px-4 py-2">Answer</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(faqList) &&
            faqList.map((faq: any) => (
              <tr key={faq.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {faq.question}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {faq.answer}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                  <button
                    onClick={() => handleDelete(faq._id)}
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

export default FaqListPage;
