const {Sequelize}=require('sequelize');
const CrudRepository = require("./crud.repository");
const {Flight,Airplane,City,Airport} = require('../models');
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
                order:sort,

                include:[
                    {   
                        //this join will print the airplane whhich as airplaneId
                        model:Airplane,
                        required:true,//for the inner join
                        as : 'airplaneDetail'//if the foreign key is primary key of the another table neeed not to put any extra effort 
                    },
                    {
                        model:Airport,
                        required:true,
                        as:'departureAirport',
                        on:{
                            col1:Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=" ,Sequelize.col("departureAirport.code"))
                        },
                        include:[
                            {
                                model:City,
                                required:true,
                                as:'city'//connected due to foreign key is cityId 
                            }
                        ]
                    },
                    {
                        model:Airport,
                        required:true,
                        as:'arrivalAirport',
                        on:{
                            col1:Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=" ,Sequelize.col("arrivalAirport.code"))
                        },
                        include:[
                            {
                                model:City,
                                required:true,
                                as:'city'//connected due to foreign key is cityId 
                            }
                        ]
                    }
                ]
            });
            return response;
        }
    }
}

module.exports=FlightRepository;