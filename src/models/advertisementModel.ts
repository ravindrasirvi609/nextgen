const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  targetAudience: {
    type: String,
  },
  budget: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["active", "paused", "expired"],
    default: "active",
  },
});

const Advertisement = mongoose.model("Advertisement", advertisementSchema);

module.exports = Advertisement;
