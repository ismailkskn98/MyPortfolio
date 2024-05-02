'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogCategory extends Model {
    static associate(models) {}
  }
  BlogCategory.init({}, {
    sequelize,
    modelName: 'BlogCategory',
    timestamps: false,
  });
  return BlogCategory;
};