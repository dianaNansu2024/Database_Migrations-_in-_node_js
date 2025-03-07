'use strict';
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Student extends Model {
    static init(sequelize) {
      super.init(
        {
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          }
        },
        {
          sequelize,
          modelName: "Student",
          tableName: "Students",
          timestamps: true
        }
      );
    }
  }

  return Student;
};