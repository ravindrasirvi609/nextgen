"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AdvertigmentWithUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
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
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error occurred during submission:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-60 pt-96">
      <h1 className="text-3xl font-bold mb-4">Advertise With Us</h1>
      <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
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
            <p className="text-red-500">{errors.name}</p>
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
        {/* <div className="mb-4">
          <label htmlFor="targetAudience" className="block mb-2">
            Target Audience:
          </label>
          <input
            type="text"
            id="targetAudience"
            {...register("targetAudience", {
              required: "Target Audience is required",
            })}
            className="w-full border border-gray-300 rounded py-2 px-4 text-gray-900"
          />
          {typeof errors.targetAudience === "string" && (
            <p className="text-red-500">{errors.targetAudience}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="budget" className="block mb-2">
            Budget:
          </label>
          <input
            type="number"
            id="budget"
            {...register("budget", {
              required: "Budget is required",
              min: { value: 0, message: "Budget must be a positive number" },
            })}
            className="w-full border border-gray-300 rounded py-2 px-4 text-gray-900"
          />
          {typeof errors.budget === "string" && (
            <p className="text-red-500">{errors.budget}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block mb-2">
            Status:
          </label>
          <select
            id="status"
            {...register("status", { required: "Status is required" })}
            className="w-full border border-gray-300 rounded py-2 px-4 text-gray-900"
          >
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="expired">Expired</option>
          </select>
          {typeof errors.status === "string" && (
            <p className="text-red-500">{errors.status}</p>
          )}
        </div> */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdvertigmentWithUs;
