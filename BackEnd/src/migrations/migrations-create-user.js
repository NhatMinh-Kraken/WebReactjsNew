'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Email: {
        type: Sequelize.STRING(50)
      },
      Password: {
        type: Sequelize.STRING(100)
      },
      FirstName: {
        type: Sequelize.STRING(20)
      },
      LastName: {
        type: Sequelize.STRING(20)
      },
      PhoneUser: {
        type: Sequelize.STRING(15)
      },
      Address: {
        type: Sequelize.TEXT
      },
      Gender: {
        type: Sequelize.STRING(2)
      },
      ImageUser: {
        type: Sequelize.STRING
      },
      RoleId: {
        type: Sequelize.STRING(2)
      },
      CreatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UpdatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};