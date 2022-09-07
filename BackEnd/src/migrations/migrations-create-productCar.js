'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ProductCar', {

            IdNameProductCar: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            NameProductCar: {
                type: Sequelize.STRING(50)
            },
            IdTypeCar: {
                type: Sequelize.INTEGER
            },
            ReviewCar1: {
                type: Sequelize.TEXT
            },
            ImagesCar1: {
                type: Sequelize.STRING
            },
            ReviewCar2: {
                type: Sequelize.TEXT
            },
            SeatsCar: {
                type: Sequelize.STRING(10)
            },
            OriginCar: {
                type: Sequelize.INTEGER
            },
            SizeCar: {
                type: Sequelize.STRING(50)
            },
            DatabaselengthCar: {
                type: Sequelize.STRING(10)
            },
            EngineCar: {
                type: Sequelize.STRING(20)
            },
            WorkingCapacityCar: {
                type: Sequelize.STRING(10)
            },
            CapacityFuelCar: {
                type: Sequelize.STRING(10)
            },
            TypeFuelCar: {
                type: Sequelize.STRING(10)
            },
            WattageMax: {
                type: Sequelize.STRING(50)
            },
            MomenCarMax: {
                type: Sequelize.STRING(50)
            },
            GearCar: {
                type: Sequelize.STRING(20)
            },
            DriveSystemCar: {
                type: Sequelize.STRING(10)
            },
            SuspensionSystemCar: {
                type: Sequelize.STRING(20)
            },
            PowerSteeringCar: {
                type: Sequelize.INTEGER
            },
            WheelSizeCar: {
                type: Sequelize.STRING(10)
            },
            CarPrice: {
                type: Sequelize.STRING(20)
            },
            CarPriceHCM: {
                type: Sequelize.STRING(20)
            },
            CarPriceHN: {
                type: Sequelize.STRING(20)
            },
            CarPriceTinhKhac: {
                type: Sequelize.STRING(20)
            },
            CarColor1: {
                type: Sequelize.STRING
            },
            CarColor2: {
                type: Sequelize.STRING
            },
            CarColor3: {
                type: Sequelize.STRING
            },
            ReviewCarAppearance1: {
                type: Sequelize.TEXT
            },
            ReviewCarAppearance2: {
                type: Sequelize.TEXT
            },
            ImagesCarHead: {
                type: Sequelize.STRING
            },
            ReviewCarHead1: {
                type: Sequelize.TEXT
            },
            ReviewCarHead2: {
                type: Sequelize.TEXT
            },
            ImagesCarRediator: {
                type: Sequelize.STRING
            },
            ReviewCarRediators1: {
                type: Sequelize.TEXT
            },
            ReviewCarRediators2: {
                type: Sequelize.TEXT
            },
            ImagesCarBody1: {
                type: Sequelize.STRING
            },
            ReviewCarBody1: {
                type: Sequelize.TEXT
            },
            ImagesCarBody2: {
                type: Sequelize.STRING
            },
            ReviewCarBody2: {
                type: Sequelize.TEXT
            },
            ImagesCarRear: {
                type: Sequelize.STRING
            },
            ReviewCarRear1: {
                type: Sequelize.TEXT
            },
            ReviewCarRear2: {
                type: Sequelize.TEXT
            },
            ReviewCarInterior1: {
                type: Sequelize.TEXT
            },
            ReviewCarInterior2: {
                type: Sequelize.TEXT
            },
            ReviewCarinterior3: {
                type: Sequelize.TEXT
            },
            ImagesCarCockpit: {
                type: Sequelize.STRING
            },
            ReviewCarCorkpit: {
                type: Sequelize.TEXT
            },
            ImagesCarChairbefore: {
                type: Sequelize.STRING
            },
            ReviewCarChairBefore: {
                type: Sequelize.TEXT
            },
            ImagesCarCabin: {
                type: Sequelize.STRING
            },
            ReviewCarCabin1: {
                type: Sequelize.TEXT
            },
            ReviewCarCabin2: {
                type: Sequelize.TEXT
            },
            imagesCarLuggageCompartment: {
                type: Sequelize.STRING
            },
            ReviewCarLuggageCompartment1: {
                type: Sequelize.TEXT
            },
            ReviewCarLuggageCompartment2: {
                type: Sequelize.TEXT
            },
            ReviewCarPremonitions: {
                type: Sequelize.TEXT
            },
            ImagesCarPremonitions: {
                type: Sequelize.STRING
            },
            ReviewCarTechnology1: {
                type: Sequelize.TEXT
            },
            ReviewCarTechnology2: {
                type: Sequelize.TEXT
            },
            ImagesCarEngine: {
                type: Sequelize.STRING
            },
            ReviewCarEngine1: {
                type: Sequelize.TEXT
            },
            ReviewCarEngine2: {
                type: Sequelize.TEXT
            },
            ImagesCarOperate: {
                type: Sequelize.STRING
            },
            ReviewCarOperate1: {
                type: Sequelize.TEXT
            },
            ReviewCarOperate2: {
                type: Sequelize.TEXT
            },
            ReviewCarOperate3: {
                type: Sequelize.TEXT
            },
            ReviewCarSafe: {
                type: Sequelize.TEXT
            },
            Standard1: {
                type: Sequelize.TEXT
            },
            Standard2: {
                type: Sequelize.TEXT
            },
            Standard3: {
                type: Sequelize.TEXT
            },
            Standard4: {
                type: Sequelize.TEXT
            },
            Standard5: {
                type: Sequelize.TEXT
            },
            Standard6: {
                type: Sequelize.TEXT
            },
            Standard7: {
                type: Sequelize.TEXT
            },
            Standard8: {
                type: Sequelize.TEXT
            },
            Standard9: {
                type: Sequelize.TEXT
            },
            Standard10: {
                type: Sequelize.TEXT
            },
            Standard11: {
                type: Sequelize.TEXT
            },
            Standard12: {
                type: Sequelize.TEXT
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
        await queryInterface.dropTable('ProductCar');
    }
};