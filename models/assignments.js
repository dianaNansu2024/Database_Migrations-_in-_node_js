'use strict';
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Assignment extends Model {
    static associate(models) {
      // Define associations here (if any)
    }
  }
  Assignment.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "Assignment",
      tableName: "Assignments",
      timestamps: true
    }
  );
  return Assignment;
};