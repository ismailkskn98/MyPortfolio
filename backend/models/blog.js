'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {
      Blog.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Blog.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    tags: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};