"use strict";
const bcryptjs = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Skills", [
      {
        name: "php",
        image: "images/php-image-1716483639577.png",
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Skills", null, {});
  },
};
