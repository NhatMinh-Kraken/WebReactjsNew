'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('typecar', {

            IdTypeCar: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            NameTypeCar: {
                type: Sequelize.STRING(50)
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
        await queryInterface.dropTable('typecar');
    }
};