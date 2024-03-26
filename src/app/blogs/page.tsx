import React from 'react';

const blogsData = [
      {
            id: 1,
            title: 'Blog 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'John Doe',
      },
      {
            id: 2,
            title: 'Blog 2',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Jane Smith',
      },
      // Add more blogs here
];

const Blogs: React.FC = () => {
      return (
            <div className="container mx-auto py-44">
                  <h1 className="text-2xl font-bold mb-4">NextGen Leaders Blogs</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {blogsData.map((blog) => (
                              <div key={blog.id} className="bg-white p-4 shadow">
                                    <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                                    <p className="text-gray-600 mb-4">{blog.content}</p>
                                    <p className="text-gray-500">Author: {blog.author}</p>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default Blogs;