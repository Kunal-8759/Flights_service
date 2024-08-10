'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    
    static associate(models) {
      // define association here
      //one airport should belong to one city only -->thats why one-to-one relationship done through belongsTo
      this.belongsTo(models.City,{
        foreignKey:'cityId'
      });
    }
  }
  Airport.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    code: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    adress: {
      type: DataTypes.STRING,
      unique:true
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};