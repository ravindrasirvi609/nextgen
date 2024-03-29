"use client";
import React, { useState } from 'react';
import axios from 'axios';

const Contact: React.FC = () => {
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
      });
      const [loading, setLoading] = useState(false);
      const [successMessage, setSuccessMessage] = useState('');
      const [errors, setErrors] = useState<{ [key: string]: string }>({});

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value
            });
            setErrors({
                  ...errors,
                  [name]: ''
            });
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);
            try {
                  const response = await axios.post('api/contact', formData);
                  setSuccessMessage(response.data.message);
                  setFormData({ name: '', email: '', message: '' }); // Clear form fields on successful submission
            } catch (error: any) {
                  if (error.response) {
                        setErrors(error.response.data.errors);
                  } else {
                        console.error('An error occurred:', error.message);
                  }
            }
            setLoading(false);
      };

      return (
            <div className="container mx-auto py-44">
                  <h1 className="text-2xl font-bold mb-4">Contact</h1>
                  <form className="max-w-md" onSubmit={handleSubmit}>
                        <div className="mb-4">
                              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Name
                              </label>
                              <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                                    placeholder="Enter your name"
                              />
                              {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                    Email
                              </label>
                              <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="Enter your email"
                              />
                              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                                    Message
                              </label>
                              <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
                                    placeholder="Enter your message"
                                    rows={4}
                              />
                              {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                        </div>
                        <button
                              type="submit"
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              disabled={loading}
                        >
                              {loading ? 'Submitting...' : 'Submit'}
                        </button>
                        {successMessage && (
                              <div className="text-green-600">{successMessage}</div>
                        )}
                  </form>
            </div>
      );
};

export default Contact;
