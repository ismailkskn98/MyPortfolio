const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const experienceSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  verticalImage: { type: String, required: true },
  horizontalImage: { type: String, required: true },
  time: { type: Date, default: Date.now() },
});

const Experience = model("experience", experienceSchema);
module.exports = Experience;
