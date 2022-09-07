'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('allcode', {

            IdAllCode: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Key: {
                type: Sequelize.STRING(20)
            },
            Type: {
                type: Sequelize.STRING(20)
            },
            Value_EN: {
                type: Sequelize.STRING(20)
            },
            Value_VI: {
                type: Sequelize.STRING(20)
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
        await queryInterface.dropTable('allcode');
    }
};