
const { StatusCodes } = require('http-status-codes');
const {FlightRepository}=require('../repositories');
const AppError = require('../utils/Errors/app.error');
const { compareTime } = require('../utils/helper/datetime.helper');

const flightRespository=new FlightRepository();

// data:{}
async function createFlight(data){
    try {
        if(compareTime(data.arrivalTime,data.departureTime)){
            const flight=await flightRespository.create(data);
            return flight;
        }
        throw new AppError('TimeConstraintProblem',StatusCodes.BAD_REQUEST);
    } catch (error) {
        if(error.message == 'TimeConstraintProblem'){
            throw new AppError('Arrival Time cant be less than Departure Time',StatusCodes.BAD_REQUEST);
        }
        if(error.name == 'SequelizeValidationError'){
            let explanantion=[];
            error.errors.forEach((err)=>{
                explanantion.push(err.message);
            })
            throw new AppError(explanantion,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports={
    createFlight,
    
}