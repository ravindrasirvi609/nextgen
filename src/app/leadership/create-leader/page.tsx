"use client";
import axios from "axios";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

type Field = {
  id: string;
  value?: string;
};

type LeaderFormData = {
  languages: Field[];
  achievements: Field[];
  publications: Field[];
  awards: Field[];
  name: string;
  position: string;
  bio: string;
  file: FileList;
  email: string;
  phone: string;
  location: string;
  education?: string;
  linkedin?: string;
  dateOfBirth?: string;
  nationality?: string;
  socialMediaLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  experience?: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
  }[];
};
const LeaderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<LeaderFormData>();

  const [experienceFields, setExperienceFields] = useState([
    { company: "", role: "", startDate: "", endDate: "" },
  ]);
  const { fields, append, remove } = useFieldArray<LeaderFormData, "languages">(
    { control, name: "languages" }
  );

  const {
    fields: achievementsFields,
    append: appendAchievements,
    remove: removeAchievements,
  } = useFieldArray<LeaderFormData, "achievements">({
    control,
    name: "achievements",
  });

  const {
    fields: publicationsFields,
    append: appendPublications,
    remove: removePublications,
  } = useFieldArray<LeaderFormData, "publications">({
    control,
    name: "publications",
  });

  const {
    fields: awardsFields,
    append: appendAwards,
    remove: removeAwards,
  } = useFieldArray<LeaderFormData, "awards">({ control, name: "awards" });

  const addExperienceField = () => {
    setExperienceFields([
      ...experienceFields,
      { company: "", role: "", startDate: "", endDate: "" },
    ]);
  };

  const removeExperienceField = (index: number) => {
    const newFields = [...experienceFields];
    newFields.splice(index, 1);
    setExperienceFields(newFields);
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    if (data.file[0]) {
      formData.append("file", data.file[0]);
    }

    if (data.experience) {
      formData.append("experience", JSON.stringify(data.experience));
      delete data.experience;
    }

    if (data.socialMediaLinks) {
      formData.append(
        "socialMediaLinks",
        JSON.stringify(data.socialMediaLinks)
      );
      delete data.socialMediaLinks;
    }
    if (data.languages) {
      formData.append(
        "languages",
        JSON.stringify(data.languages.map((l: any) => l.value))
      );
      delete data.languages;
    }
    if (data.achievements) {
      formData.append(
        "achievements",
        JSON.stringify(data.achievements.map((a: any) => a.value))
      );
      delete data.achievements;
    }
    if (data.publications) {
      formData.append(
        "publications",
        JSON.stringify(data.publications.map((p: any) => p.value))
      );
      delete data.publications;
    }
    if (data.awards) {
      formData.append(
        "awards",
        JSON.stringify(data.awards.map((a: any) => a.value))
      );
      delete data.awards;
    }

    for (const key in data) {
      if (key !== "file") {
        formData.append(key, data[key]);
      }
    }

    try {
      const response = await axios.post("/api/leaders/create-leader", formData);
      const result = response.data;

      if (result.message === "Leader added successfully") {
        reset();
      } else {
        console.error("Failed to add leader:", result.error);
      }
    } catch (error) {
      console.error("Error adding leader:", error);
    }
  };

  return (
    <div className="py-40">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md"
      >
        {/* Name */}
        <div className="text-center text-3xl font-semibold text-gray-800">
          Create Leader
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">
              {String(errors.name.message)}
            </p>
          )}
        </div>

        {/* Position */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Position
          </label>
          <input
            type="text"
            {...register("position", { required: "Position is required" })}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.position && (
            <p className="text-red-500 text-xs italic">
              {String(errors.position.message)}
            </p>
          )}
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Bio
          </label>
          <textarea
            {...register("bio", { required: "Bio is required" })}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
          {errors.bio && (
            <p className="text-red-500 text-xs italic">
              {String(errors.bio.message)}
            </p>
          )}
        </div>

        {/* File */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            File
          </label>
          <input
            type="file"
            {...register("file", { required: "File is required" })}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.file && (
            <p className="text-red-500 text-xs italic">
              {String(errors.file.message)}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {String(errors.email.message)}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic">
              {String(errors.phone.message)}
            </p>
          )}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            {...register("location", { required: "Location is required" })}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.location && (
            <p className="text-red-500 text-xs italic">
              {String(errors.location.message)}
            </p>
          )}
        </div>

        {/* Education */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Education
          </label>
          <input
            type="text"
            {...register("education")}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* LinkedIn */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            LinkedIn
          </label>
          <input
            type="url"
            {...register("linkedin")}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dateOfBirth")}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Nationality */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nationality
          </label>
          <input
            type="text"
            {...register("nationality")}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Languages */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Languages
          </label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <input
                {...register(`languages.${index}.value`)}
                defaultValue={field.value || ""}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                className="bg-orange-400 hover:bg-orange-500 transition-colors duration-300 ease-in-out text-white p-1 rounded ml-2"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out text-white p-1 rounded"
            onClick={() => append({ id: "" })}
          >
            Add Language
          </button>
        </div>

        {/* Achievements */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Achievements
          </label>
          {achievementsFields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <textarea
                {...register(`achievements.${index}.value`)}
                defaultValue={field.value || ""}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                className="bg-orange-400 hover:bg-orange-500 transition-colors duration-300 ease-in-out text-white p-1 rounded ml-2"
                onClick={() => removeAchievements(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out text-white p-1 rounded"
            onClick={() => appendAchievements({ id: "" })}
          >
            Add Achievement
          </button>
        </div>

        {/* Publications */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Publications
          </label>
          {publicationsFields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <textarea
                {...register(`publications.${index}.value`)}
                defaultValue={field.value || ""}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                className="bg-orange-400 hover:bg-orange-500 transition-colors duration-300 ease-in-out text-white p-1 rounded ml-2"
                onClick={() => removePublications(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out text-white p-1 rounded"
            onClick={() => appendPublications({ id: "" })}
          >
            Add Publication
          </button>
        </div>

        {/* Awards */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Awards
          </label>
          {awardsFields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <textarea
                {...register(`awards.${index}.value`)}
                defaultValue={field.value || ""}
                className="border rounded w-full p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                className="bg-orange-400 hover:bg-orange-500 transition-colors duration-300 ease-in-out text-white p-1 rounded ml-2"
                onClick={() => removeAwards(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out text-white p-1 rounded"
            onClick={() => appendAwards({ id: "" })}
          >
            Add Award
          </button>
        </div>

        {/* Social Media Links */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Social Media Links
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder="Facebook"
              {...register("socialMediaLinks.facebook")}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            />
            <input
              type="text"
              placeholder="Twitter"
              {...register("socialMediaLinks.twitter")}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            />
            <input
              type="text"
              placeholder="Instagram"
              {...register("socialMediaLinks.instagram")}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Experience
          </label>
          {experienceFields.map((field, index) => (
            <div key={index} className="flex flex-col space-y-2 mb-2">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Company"
                  {...register(`experience.${index}.company` as const)}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="text"
                  placeholder="Role"
                  {...register(`experience.${index}.role` as const)}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="date"
                  {...register(`experience.${index}.startDate`)}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="date"
                  {...register(`experience.${index}.endDate`)}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {index === experienceFields.length - 1 && (
                <button
                  type="button"
                  onClick={() => addExperienceField()}
                  className="text-blue-500 mt-2"
                >
                  Add Another Experience
                </button>
              )}
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => removeExperienceField(index)}
                  className="text-red-500 mt-2"
                >
                  Remove Experience
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaderForm;
