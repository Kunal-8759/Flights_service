const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");

//req.body={flightNumber,airplaneId,departureAirportId,arrivalAirportId,arrivalTime,departureTime,price,boardingGate,totalSeats}
async function createFlight(req,res){
    try {
        const flight= await FlightService.createFlight(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"flight created successfully",
            data:flight,
            error:{}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success:false,
            message:"something went wrong",
            data:{},
            error:error
        });
    }
}

async function getAllFlights(req,res){
    try {
        const flights = await FlightService.getAllFlights(req.query);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"flight fetched successfully",
            data:flights,
            error:{}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success:false,
            message:"something went wrong",
            data:{},
            error:error
        });
    }
}


module.exports={
    createFlight,
    getAllFlights
}