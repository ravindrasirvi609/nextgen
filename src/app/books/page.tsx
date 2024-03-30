import React from 'react';

const Books = () => {
      const books = [
            { title: 'Book 1', author: 'Author 1' },
            { title: 'Book 2', author: 'Author 2' },
            { title: 'Book 3', author: 'Author 3' },
      ];

      return (
            <div className="container mx-auto py-44">
                  <h1 className="text-2xl font-bold mb-4">Books</h1>
                  <div className="grid grid-cols-3 gap-4">
                        {books.map((book, index) => (
                              <div key={index} className="bg-gray-200 p-4">
                                    <h2 className="text-lg font-bold mb-2 text-gray-800">{book.title}</h2>
                                    <p className="text-gray-600">{book.author}</p>
                              </div>
                        ))}
                  </div>
                  
            </div>
      );
};

export default Books;