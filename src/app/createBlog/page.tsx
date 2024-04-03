"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ErrorMessage } from "@hookform/error-message";

const CreateBlogPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    if (data.file[0]) {
      formData.append("file", data.file[0]);
    }
    setLoading(true);
    try {
      console.log("Submitting form data:", formData);

      const response = await axios.post("/api/createBlog", formData);
      console.log("Blog post created successfully:", response.data);
      setSuccessMessage("Blog post created successfully");
      reset();
    } catch (error) {
      console.error("Error creating blog post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-44">
      <h1 className="text-4xl text-center font-bold mb-4">Create Blog</h1>
      {loading && <div>Loading...</div>}
      {successMessage && <div className="text-green-600">{successMessage}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className={`border text-gray-800 font-bold rounded w-full p-2 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            {...register("title", { required: "Title is required" })}
          />
          <ErrorMessage
            errors={errors}
            name="title"
            as={<p className="text-red-500 mt-1" />}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            className={`border rounded text-gray-800 w-full p-2 ${
              errors.content ? "border-red-500" : "border-gray-300"
            }`}
            {...register("content", { required: "Content is required" })}
          />
          <ErrorMessage
            errors={errors}
            name="content"
            as={<p className="text-red-500 mt-1" />}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block mb-2">
            File:
          </label>
          <input
            type="file"
            id="file"
            {...register("file", { required: "File is required" })}
            className="w-full border border-gray-300 rounded py-2 px-4"
          />
          <ErrorMessage
            errors={errors}
            name="file"
            as={<p className="text-red-500 mt-1" />}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
