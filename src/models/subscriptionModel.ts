import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  features: [{ type: String, required: true }],
  benefits: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Plan = mongoose.models.Plan || mongoose.model("Plan", planSchema);

export default Plan;
