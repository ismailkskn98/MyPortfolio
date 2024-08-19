const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const heroSchema = new Schema(
  {
    name: { type: String, required: true },
    job: { type: String, required: true },
    email: { type: String, required: true },
    freelancer: { type: String, required: true },
    city: { type: String, required: true },
    website: { type: String, required: true },
    about: { type: String, required: true },
  },
  { timestamps: true }
);

const Hero = model("Hero", heroSchema);

module.exports = Hero;
