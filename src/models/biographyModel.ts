import mongoose from "mongoose";
const { Schema } = mongoose;

const biographySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    dateOfBirth: {
      type: Date,
    },
    position: String,
    bio: String,
    imageUrl: String,
    placeOfBirth: String,
    nationality: String,
    occupation: String,
    education: String,
    achievements: [String],
    languages: [String],
    hobbies: [String],
    location: String,
    email: String,
    phone: String,
    website: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    instagram: String,
  },
  {
    timestamps: true,
  }
);

const Biography =
  mongoose.models.Biography || mongoose.model("Biography", biographySchema);

export default Biography;
