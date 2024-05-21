"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class About extends Model {
    static associate(models) {}
  }
  About.init(
    {
      about: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "About",
    }
  );
  return About;
};
