import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  role: {
    type: String,
  },
  message: {
    type: String,
  },
  rating: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Testimonials =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);

export default Testimonials;
