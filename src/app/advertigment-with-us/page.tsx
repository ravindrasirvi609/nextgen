"use client";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AdvertigmentWithUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    if (data.file[0]) {
      formData.append("file", data.file[0]);
    }
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("link", data.link);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);

    try {
      console.log("Submitting form data:", formData);

      const response = await axios.post(
        "api/advertisement/add-advertisement",
        formData
      );

      if (response) {
        console.log("Form submitted successfully");
        setSuccessMessage("Form submitted successfully!");
        reset();
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error occurred during submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-24">
      <h1 className="text-3xl font-bold mb-4">Advertise With Us</h1>
      <form className="w-full md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-300 rounded py-2 px-4 text-gray-900"
          />
          {typeof errors.name === "string" && (
            <p className="text-red-500">Name is Required</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            className="w-full border border-gray-300 rounded py-2 px-4 text-gray-900"
          />
          {typeof errors.email === "string" && (
            <p className="text-red-500">{errors.email}</p>
          )}
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
          {typeof errors.file === "string" && (
            <p className="text-red-500">{errors.file}</p>
          )}{" "}
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className="w-full border border-gray-300 rounded py-2 px-4 text-gray-900"
          />
          {typeof errors.title === "string" && (
            <p className="text-red-500">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">
            Description:
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full border border-gray-300 rounded py-2 px-4 text-gray-900"
          ></textarea>
          {typeof errors.description === "string" && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block mb-2">
            Link:
          </label>
          <input
            type="text"
            id="link"
            {...register("link", { required: "Link is required" })}
            className="w-full border border-gray-300 rounded py-2 px-4 text-gray-900"
          />
          {typeof errors.link === "string" && (
            <p className="text-red-500">{errors.link}</p>
          )}{" "}
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block mb-2">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            {...register("startDate", { required: "Start Date is required" })}
            className="w-full border border-gray-300 rounded py-2 px-4 text-gray-900"
          />
          {typeof errors.startDate === "string" && (
            <p className="text-red-500">{errors.startDate}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block mb-2">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            {...register("endDate", { required: "End Date is required" })}
            className="w-full border border-gray-300 rounded py-2 px-4 text-gray-900"
          />
          {typeof errors.endDate === "string" && (
            <p className="text-red-500">{errors.endDate}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {loading && <div className="mt-4">Loading...</div>}
      </form>
      {successMessage && (
        <p className="text-green-500 mt-4">{successMessage}</p>
      )}
    </div>
  );
};

export default AdvertigmentWithUs;
