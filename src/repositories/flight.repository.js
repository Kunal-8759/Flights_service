const CrudRepository = require("./crud.repository");
const {Flight} = require('../models');
const AppError = require("../utils/Errors/app.error");
const { StatusCodes } = require("http-status-codes");

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

    //the filter we get here is object
    // flight={
    //     departureAirportId,
    //     arrivalAirportId,
    //     price,
    //     totalSeats,
    //     departureTime,
    // }

    // sort: [
    //     ['departureTime', 'ASC'],
    //     ['price', 'DESC'],
    // ],


    async getAllFlights(filter,sort){
        if(filter.departureAirportId==filter.arrivalAirportId){
            throw new AppError('DepartureArrivalSame',StatusCodes.BAD_REQUEST);
        }
        else{
            const response=await Flight.findAll({
                where:filter,
                order:sort
            });
            return response;
        }
    }
}

module.exports=FlightRepository;