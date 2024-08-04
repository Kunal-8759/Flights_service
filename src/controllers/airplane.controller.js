const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

//req.body={modelNo,capacity}
async function createAirplane(req,res,next){
    try {
        const airplane= await AirplaneService.createAirplane({
            modelNo:req.body.modelNo,
            capacity:req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"airplane created successfully",
            data:airplane,
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
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