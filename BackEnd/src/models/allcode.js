'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Allcode.init({
        IdAllCode: DataTypes.INTEGER,
        Key: DataTypes.STRING,
        Type: DataTypes.STRING,
        Value_EN: DataTypes.STRING,
        Value_VI: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};