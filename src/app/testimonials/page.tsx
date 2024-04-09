"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("/api/testimonial/testimonial-list");
      setTestimonials(response.data.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  return (
    <div className="container mx-auto py-40">
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(
          (testimonial: { message: string; name: string; _id: string }) => (
            <motion.div
              key={testimonial._id}
              className="bg-white p-6 rounded overflow-hidden shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-800 mb-4">{testimonial.message}</p>
              <p className="text-gray-600">{testimonial.name}</p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Testimonials;
