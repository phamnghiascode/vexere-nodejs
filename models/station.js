'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trips }) {
      // define association here
      this.hasMany(Trips, { foreignKey: 'fromStation', as: 'from' })
      this.hasMany(Trips, { foreignKey: 'toStation', as: 'to' })
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 30]
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        checkLen(value) {
          if (value.length >= 5 && value.length <= 50) {
            return true
          } else {
            throw new Error("Độ dài địa chỉ nằm trong khoảng 5 - 50 kí tự")
          }
        }
      }
    },
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};