const slugify = require("slugify");

const options = {
  replacement: "-",
  remove: undefined,
  lower: true,
  strict: true,
  locale: "tr",
  trim: true,
};
module.exports = (text) => {
  return slugify(text, options);
};
