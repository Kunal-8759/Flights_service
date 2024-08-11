'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    
    static associate(models) {
      //one flight require one airplane only 
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId'
      });
      //one flight will departure from one airport only
      this.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId'
      });
      //one flight will arrive on one airport only
      this.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId'
      });

    }
  }
  Flight.init({
    flightNumber:{
      type:DataTypes.STRING,
      allowNull:false
    },
    airplaneId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    departureAirportId:{
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalAirportId:{
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalTime:{
      type: DataTypes.DATE,
      allowNull:false
    },
    departureTime:{
      type: DataTypes.DATE,
      allowNull:false
    },
    price:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate:{
      type:DataTypes.STRING,
    },
    totalSeats:{//total seats remaining
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};