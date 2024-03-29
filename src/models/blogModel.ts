import mongoose from "mongoose";

const { Schema } = mongoose;

const BlogSchema = new Schema({
      title: {
            type: String,
            required: [true, "Please provide a title for the blog post"],
      },
      content: {
            type: String,
            required: [true, "Please provide content for the blog post"],
      },
      author: {
            type: String,
      },
      createdAt: {
            type: Date,
            default: Date.now
      },
      updatedAt: {
            type: Date,
            default: Date.now
      },
      imageUrl: {
            type: String,
      },
      category: {
            type: String,
      },
      tags: {
            type: [String],
            default: [],
      },
      comments: [
            {
                  type: Schema.Types.ObjectId,
                  ref: 'Comment'
            }
      ]
});

const BlogPost = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default BlogPost;
