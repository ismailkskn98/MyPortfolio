const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const languageSchema = new Schema({
  name: { type: String, required: true },
});

const skillSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    language: [languageSchema],
  },
  { timestamps: true }
);

const Skill = model("Skill", skillSchema);
module.exports = Skill;
