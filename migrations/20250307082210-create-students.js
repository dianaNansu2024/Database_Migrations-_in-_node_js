'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Students", {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true, // Fixed typo
              primaryKey: true,
              allowNull: false
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false
          },
          email: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true
          },
          createdAt: {
              type: Sequelize.DATE,
              allowNull: false
          },
          updatedAt: {
              type: Sequelize.DATE,
              allowNull: false
          }
      });
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Students");
  }
};