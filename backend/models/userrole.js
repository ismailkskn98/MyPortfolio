'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    static associate(models) {}
  }
  UserRole.init({}, {
    sequelize,
    modelName: 'UserRole',
    timestamps: false,
  });
  return UserRole;
};