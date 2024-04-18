"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormData = {
  question: string;
  answer: string;
};

const FAQCreatePage: React.FC = () => {
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
      await axios.post("/api/faq/createFaq", data);
      console.log("Form submitted successfully!");
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
            htmlFor="question"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Question:
          </label>
          <input
            {...register("question", { required: "Question is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.question && (
            <span className="text-red-500">{errors.question.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="answer"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Answer:
          </label>
          <input
            {...register("answer", { required: "Answer is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.answer && (
            <span className="text-red-500">{errors.answer.message}</span>
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

export default FAQCreatePage;
