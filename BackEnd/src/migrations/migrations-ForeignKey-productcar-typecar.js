'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ForeignKey_ProductCar_TypeCar', {

            IdProductCar_TypeCar: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            IdTypeCar: {
                type: Sequelize.INTEGER
            },
            IdNameProductCar: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('ForeignKey_ProductCar_TypeCar');
    }
};