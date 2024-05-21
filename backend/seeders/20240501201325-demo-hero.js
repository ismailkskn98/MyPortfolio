"use strict";
const bcryptjs = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Heros", [
      {
        name: "İsmail",
        job: "Web Developar",
        email: "hamdismail@gmail.com",
        website: "www.hamdi.com.tr",
        freelancer: "Freelancer",
        city: "Ankara",
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Heros", null, {});
  },
};
