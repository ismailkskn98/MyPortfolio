'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return Promise.all([
        queryInterface.addColumn( 'UserRoles', 'userId', {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: 'Users',
              },
              key: 'id'
            },
          },
        ),
        queryInterface.addColumn( 'UserRoles', 'roleId',{
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: 'Roles',
              },
              key: 'id'
            },
          }
        ),
      ]);
  },
  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('UserRoles', 'userId'),
      queryInterface.removeColumn('UserRoles', 'roleId'),
    ])
  }
};
