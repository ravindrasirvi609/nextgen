"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormData = {
  name: string;
  role: string;
  message: string;
  rating: number;
};

const TestimonialCreatePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await axios.post("/api/testimonial/add-testimonial", data);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Role:
          </label>
          <input
            {...register("role", { required: "Role is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.role && (
            <span className="text-red-500">{errors.role.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Rating:
          </label>
          <input
            {...register("rating", { required: "Rating is required" })}
            type="number"
            min="1"
            max="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.rating && (
            <span className="text-red-500">{errors.rating.message}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={`${
              isLoading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {isSuccess && (
          <div className="mt-4 text-green-500 text-center">
            Successfully submitted!
          </div>
        )}
      </form>
    </div>
  );
};

export default TestimonialCreatePage;
