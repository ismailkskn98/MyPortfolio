'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    static associate(models) {}
  }
  Experience.init({
    name: DataTypes.STRING,
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Experience',
    timestamps: false,
  });
  return Experience;
};