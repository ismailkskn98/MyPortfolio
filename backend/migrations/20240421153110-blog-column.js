"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn("blog", "userId", {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "users",
        },
        key: "id",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("blog", "userId");
  },
};
