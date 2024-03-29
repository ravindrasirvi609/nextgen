import mongoose from "mongoose";

const { Schema } = mongoose;

const CommentSchema = new Schema({
      content: {
            type: String,
            required: [true, "Please provide content for the comment"],
      },
      author: {
            type: String,
            required: [true, "Please provide the author's name for the comment"],
      },
      createdAt: {
            type: Date,
            default: Date.now
      },
      updatedAt: {
            type: Date,
            default: Date.now
      },
      blog: {
            type: Schema.Types.ObjectId,
            ref: 'Blog'
      }
});

const Comment = mongoose.models.Comment || mongoose.model("Comment", CommentSchema);

export default Comment;
