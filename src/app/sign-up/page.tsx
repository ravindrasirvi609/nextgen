"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Link from "next/link";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
};

export default function SignupPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      if (data.password !== data.confirmPassword) {
        Swal.fire("Password and Confirm-Password Must Be Same!");
        return;
      }
      const response = await axios.post("api/users/signup", data);
      Swal.fire(
        "User successfully Registered",
        "Please Verify User From Received mail",
        "success"
      );
      router.push("/login");
    } catch (error: any) {
      if (error.response) {
        setError("email", {
          type: "manual",
          message: error.response.data.error,
        });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-col justify-center px-4 py-8 lg:px-8 w-full max-w-md mx-auto">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
            Register Your Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="space-y-6">
              <div className="relative text-left">
                <select
                  {...register("role", { required: true })}
                  className="block w-full px-4 py-2 text-sm text-gray-700 border-2 hover:bg-gray-100"
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  <option value="user">Student</option>
                  <option value="organization">Organization</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-xs mt-1">Role is required</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium leading-6 text-indigo-600"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    {...register("fullName", {
                      required: "fullName is required.",
                    })}
                    id="usefullNamername"
                    type="text"
                    autoComplete="fullName"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-indigo-600"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", {
                      required: "Email Address is required.",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email address.",
                      },
                    })}
                    id="email"
                    type="email"
                    autoComplete="email"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-indigo-600"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    {...register("password", {
                      required: "Password is required.",
                      minLength: {
                        value: 8,
                        message:
                          "Password must have at least 8 characters, one capital letter, one special symbol, and one number.",
                      },
                    })}
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium leading-6 text-indigo-600"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    {...register("confirmPassword", {
                      required: "Confirm Password is required.",
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords do not match.",
                    })}
                    id="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  {loading ? "Processing" : "Register"}
                </button>
              </div>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
