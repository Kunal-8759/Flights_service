
const { StatusCodes } = require('http-status-codes');
const {FlightRepository}=require('../repositories');
const AppError = require('../utils/Errors/app.error');

const flightRespository=new FlightRepository();

// data:{}
async function createFlight(data){
    try {
        const flight=await flightRespository.create(data);
        return flight;
    } catch (error) {
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