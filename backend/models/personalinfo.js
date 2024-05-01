'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalInfo extends Model {
    static associate(models) {}
  }
  PersonalInfo.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    location: DataTypes.STRING,
    job: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    about: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'PersonalInfo',
    timestamps: false,
  });
  return PersonalInfo;
};