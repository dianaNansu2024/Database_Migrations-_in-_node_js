'use strict';
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Teacher extends Model {
    static associate(models) {
      // Define associations here (if any)
    }
  }
  Teacher.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "Teacher",
      tableName: "Teachers",
      timestamps: true
    }
  );
  return Teacher;
};