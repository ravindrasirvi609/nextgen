import React from 'react';

const Contact: React.FC = () => {
      return (
            <div className="container mx-auto py-44">
                  <h1 className="text-2xl font-bold mb-4">Contact</h1>
                  <form className="max-w-md">
                        <div className="mb-4">
                              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Name
                              </label>
                              <input
                                    type="text"
                                    id="name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your name"
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                    Email
                              </label>
                              <input
                                    type="email"
                                    id="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your email"
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                                    Message
                              </label>
                              <textarea
                                    id="message"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your message"
                                    rows={4}
                              ></textarea>
                        </div>
                        <button
                              type="submit"
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                              Submit
                        </button>
                  </form>
                  <div className="mt-4">
                        <h2 className="text-lg font-bold mb-2">Contact Details:</h2>
                        <p>Name: Your Name</p>
                        <p>Email: yourname@example.com</p>
                  </div>
            </div>
      );
};

export default Contact;