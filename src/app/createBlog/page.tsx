"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const CreateBlogPage: React.FC = () => {
      const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = (data: any) => {
            console.log("data:", data);

            // Handle form submission here
      };

      return (
            <div className="container mx-auto py-44">
                  <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                              <label htmlFor="title" className="block font-bold mb-2">Title</label>
                              <input
                                    type="text"
                                    id="title"
                                    className={`border text-gray-800 rounded w-full p-2 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register('title', { required: 'Title is required' })}
                              />
                              <ErrorMessage errors={errors} name="title" as={<p className="text-red-500 mt-1" />} />
                        </div>

                        <div className="mb-4">
                              <label htmlFor="content" className="block font-bold mb-2">Content</label>
                              <textarea
                                    id="content"
                                    className={`border rounded text-gray-800 w-full p-2 ${errors.content ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register('content', { required: 'Content is required' })}
                              />
                              <ErrorMessage errors={errors} name="content" as={<p className="text-red-500 mt-1" />} />
                        </div>

                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
                  </form>
            </div>
      );
};

export default CreateBlogPage;