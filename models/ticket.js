'use strict';
const {
  Model
} = require('sequelize');
const trips = require('./trips');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users, Trips }) {
      // define association here
      this.belongsTo(users, { foreignKey: "user_id" })
      this.belongsTo(Trips, { foreignKey: "trip_id" })
    }
  }
  Ticket.init({}, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};