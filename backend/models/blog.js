"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {
      Blog.belongsTo(models.User, { foreignKey: "userId" });
      Blog.belongsToMany(models.Category, { through: "BlogCategory", foreignKey: "blogId" });
    }
  }
  Blog.init(
    {
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING(145),
      slug: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
