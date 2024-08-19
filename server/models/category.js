const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  },
  { timestamps: true }
);

const Category = model("Category", categorySchema);
module.exports = Category;
