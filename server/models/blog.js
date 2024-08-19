const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  },
  { timestamps: true }
);

const Blog = model("Blog", blogSchema);

module.exports = Blog;
