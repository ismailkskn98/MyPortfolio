'use strict';
const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      { 
        username: 'lodocs',
        firstname: 'ismail',
        lastname: 'keskin',
        email: 'ismail@gmail.com',
        password: await bcryptjs.hash('qrewink123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
       },
      { 
        username: 'kardesim',
        firstname: 'ibrahim',
        lastname: 'keskin',
        email: 'ibrahim@gmail.com',
        password: await bcryptjs.hash('123123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
       },
      { 
        username: 'abim',
        firstname: 'muhammed',
        lastname: 'keskin',
        email: 'muhammed@gmail.com',
        password: await bcryptjs.hash('321321', 10),
        createdAt: new Date(),
        updatedAt: new Date()
       },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};