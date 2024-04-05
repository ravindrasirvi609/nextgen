"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("/api/users/login", data);
      localStorage.setItem("role", response.data.data.role);
      router.push("/");
      Swal.fire("Good job!", "Login Successfully!", "success");
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
    <div className="relative h-screen bg-white">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
              Sign in to your account
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-indigo-600"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", { required: "Email is required" })}
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && typeof errors.email.message === "string" && (
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
                      required: "Password is required",
                    })}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password &&
                    typeof errors.password.message === "string" && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </p>
                    )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/sign-up"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              New Registration
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
