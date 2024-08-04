const express=require('express');
const airplaneRouter = require('./airplane.route');

const v1Router=express.Router();

v1Router.use('/airplanes',airplaneRouter);

module.exports=v1Router;