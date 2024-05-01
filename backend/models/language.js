'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    static associate(models) {}
  }
  Language.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Language',
    timestamps: false,
  });
  return Language;
};