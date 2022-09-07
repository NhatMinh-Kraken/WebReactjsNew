'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductCar extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    ProductCar.init({
        IdNameProductCar: DataTypes.INTEGER,
        NameProductCar: DataTypes.STRING,
        IdTypeCar: DataTypes.INTEGER,
        ReviewCar1: DataTypes.TEXT,
        ImagesCar1: DataTypes.STRING,
        ReviewCar2: DataTypes.TEXT,
        SeatsCar: DataTypes.STRING,
        OriginCar: DataTypes.INTEGER,
        SizeCar: DataTypes.STRING,
        DatabaselengthCar: DataTypes.STRING,
        EngineCar: DataTypes.STRING,
        WorkingCapacityCar: DataTypes.STRING,
        CapacityFuelCar: DataTypes.STRING,
        TypeFuelCar: DataTypes.STRING,
        WattageMax: DataTypes.STRING,
        MomenCarMax: DataTypes.STRING,
        GearCar: DataTypes.STRING,
        DriveSystemCar: DataTypes.STRING,
        SuspensionSystemCar: DataTypes.STRING,
        PowerSteeringCar: DataTypes.INTEGER,
        WheelSizeCar: DataTypes.STRING,
        CarPrice: DataTypes.STRING,
        CarPriceHCM: DataTypes.STRING,
        CarPriceHN: DataTypes.STRING,
        CarPriceTinhKhac: DataTypes.STRING,
        CarColor1: DataTypes.STRING,
        CarColor2: DataTypes.STRING,
        CarColor3: DataTypes.STRING,
        ReviewCarAppearance1: DataTypes.TEXT,
        ReviewCarAppearance2: DataTypes.TEXT,
        ImagesCarHead: DataTypes.STRING,
        ReviewCarHead1: DataTypes.TEXT,
        ReviewCarHead2: DataTypes.TEXT,
        ImagesCarRediator: DataTypes.STRING,
        ReviewCarRediators1: DataTypes.TEXT,
        ReviewCarRediators2: DataTypes.TEXT,
        ImagesCarBody1: DataTypes.STRING,
        ReviewCarBody1: DataTypes.TEXT,
        ImagesCarBody2: DataTypes.STRING,
        ReviewCarBody2: DataTypes.TEXT,
        ImagesCarRear: DataTypes.STRING,
        ReviewCarRear1: DataTypes.TEXT,
        ReviewCarRear2: DataTypes.TEXT,
        ReviewCarInterior1: DataTypes.TEXT,
        ReviewCarInterior2: DataTypes.TEXT,
        ReviewCarinterior3: DataTypes.TEXT,
        ImagesCarCockpit: DataTypes.STRING,
        ReviewCarCorkpit: DataTypes.TEXT,
        ImagesCarChairbefore: DataTypes.STRING,
        ReviewCarChairBefore: DataTypes.TEXT,
        ImagesCarCabin: DataTypes.STRING,
        ReviewCarCabin1: DataTypes.TEXT,
        ReviewCarCabin2: DataTypes.TEXT,
        imagesCarLuggageCompartment: DataTypes.STRING,
        ReviewCarLuggageCompartment1: DataTypes.TEXT,
        ReviewCarLuggageCompartment2: DataTypes.TEXT,
        ReviewCarPremonitions: DataTypes.TEXT,
        ImagesCarPremonitions: DataTypes.STRING,
        ReviewCarTechnology1: DataTypes.TEXT,
        ReviewCarTechnology2: DataTypes.TEXT,
        ImagesCarEngine: DataTypes.STRING,
        ReviewCarEngine1: DataTypes.TEXT,
        ReviewCarEngine2: DataTypes.TEXT,
        ImagesCarOperate: DataTypes.STRING,
        ReviewCarOperate1: DataTypes.TEXT,
        ReviewCarOperate2: DataTypes.TEXT,
        ReviewCarOperate3: DataTypes.TEXT,
        ReviewCarSafe: DataTypes.TEXT,
        Standard1: DataTypes.TEXT,
        Standard2: DataTypes.TEXT,
        Standard3: DataTypes.TEXT,
        Standard4: DataTypes.TEXT,
        Standard5: DataTypes.TEXT,
        Standard6: DataTypes.TEXT,
        Standard7: DataTypes.TEXT,
        Standard8: DataTypes.TEXT,
        Standard9: DataTypes.TEXT,
        Standard10: DataTypes.TEXT,
        Standard11: DataTypes.TEXT,
        Standard12: DataTypes.TEXT,

    }, {
        sequelize,
        modelName: 'ProductCar',
    });

    return ProductCar;
};