'use strict';
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Course extends Model {
    static associate(models) {
      // Define associations here (if any)
    }
  }
  Course.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: "Course",
      tableName: "Courses",
      timestamps: true
    }
  );
  return Course;
};