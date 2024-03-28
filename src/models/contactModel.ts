import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
      name: {
            type: String,
            required: [true, "Please provide a name"],
      },
      email: {
            type: String,
            required: [true, "Please provide a email"],
      },
      message: {
            type: String,
      },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },

})

const contactForm = mongoose.models.contact || mongoose.model("contact", ContactSchema);

export default contactForm;