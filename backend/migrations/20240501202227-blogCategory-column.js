"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("BlogCategories", "blogId", {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Blogs",
          },
          key: "id",
        },
      }),
      queryInterface.addColumn("BlogCategories", "categoryId", {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Categories",
          },
          key: "id",
        },
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("BlogCategories", "blogId"),
      queryInterface.removeColumn("BlogCategories", "categoryId"),
    ]);
  },
};
