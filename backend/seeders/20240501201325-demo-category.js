"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      { name: "Web Developer" },
      { name: "Mobil Developer" },
      { name: "Front End" },
      { name: "Back End" },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
