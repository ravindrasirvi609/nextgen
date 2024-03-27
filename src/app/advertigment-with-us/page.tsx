"use client"
import React, { useState } from 'react';

const AdvertigmentWithUs: React.FC = () => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            // Here you can handle the form submission logic, such as sending the details to the server
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            // Reset the form fields
            setName('');
            setEmail('');
            setMessage('');
      };

      return (
            <div className="flex flex-col items-center justify-center h-screen">
                  <h1 className="text-3xl font-bold mb-4">Advertigment With Us</h1>
                  <form className="w-1/2" onSubmit={handleSubmit}>
                        <div className="mb-4">
                              <label htmlFor="name" className="block mb-2">Name:</label>
                              <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full border border-gray-300 rounded py-2 px-4"
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="email" className="block mb-2">Email:</label>
                              <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border border-gray-300 rounded py-2 px-4"
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="message" className="block mb-2">Message:</label>
                              <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full border border-gray-300 rounded py-2 px-4"
                              ></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              Submit
                        </button>
                  </form>
            </div>
      );
};

export default AdvertigmentWithUs;