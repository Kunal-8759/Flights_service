const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

//req.body={modelNo,capacity}
async function createAirplane(req,res,next){
    try {
        const airplane= await AirplaneService.createAirplane(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"airplane created successfully",
            data:airplane,
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
    createAirplane
}