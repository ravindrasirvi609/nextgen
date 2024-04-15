import mongoose from "mongoose";

const leaderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  achievements: {
    type: [String],
    required: true,
  },
  publications: {
    type: [String],
    required: true,
  },
  awards: {
    type: [String],
    required: true,
  },
  socialMediaLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
  },
  experience: [
    {
      company: String,
      role: String,
      startDate: Date,
      endDate: Date,
    },
  ],
});

const Leader = mongoose.models.Leader || mongoose.model("Leader", leaderSchema);

export default Leader;
