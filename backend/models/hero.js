"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    static associate(models) {}
  }
  Hero.init(
    {
      name: DataTypes.STRING,
      job: DataTypes.STRING,
      email: DataTypes.STRING,
      freelancer: DataTypes.STRING,
      city: DataTypes.STRING,
      website: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hero",
      timestamps: false,
    }
  );
  return Hero;
};
