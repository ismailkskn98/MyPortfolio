"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Work extends Model {
    static associate(models) {}
  }
  Work.init(
    {
      url: DataTypes.STRING,
      verticalImage: DataTypes.STRING,
      horizontalImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Work",
    }
  );
  return Work;
};
