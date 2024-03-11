'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ticket }) {
      // define association here
      this.hasMany(Ticket, { foreignKey: 'user_id' })
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    avatar: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};