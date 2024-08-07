const express=require('express');
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');

const airplaneRouter=express.Router();

// api/v1/airplanes POST
airplaneRouter.post('/',AirplaneMiddleware.validateCreateRequest,AirplaneController.createAirplane);

// api/v1/airplanes GET
airplaneRouter.get('/',AirplaneController.getAllAirplane);

module.exports=airplaneRouter;