'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work extends Model {
    static associate(models) {}
  }
  Work.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Work',
  });
  return Work;
};