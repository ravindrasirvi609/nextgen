import React from 'react';

const Testimonials = () => {
      const testimonials = [
            {
                  id: 1,
                  name: 'John Doe',
                  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                  id: 2,
                  name: 'Jane Smith',
                  quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
            },
            {
                  id: 3,
                  name: 'Mike Johnson',
                  quote: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
            },
      ];

      return (
            <div className="container mx-auto py-44">
                  <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {testimonials.map((testimonial) => (
                              <div key={testimonial.id} className="bg-white p-4 shadow rounded">
                                    <p className="text-gray-800 mb-2">{testimonial.quote}</p>
                                    <p className="text-gray-600">{testimonial.name}</p>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default Testimonials;