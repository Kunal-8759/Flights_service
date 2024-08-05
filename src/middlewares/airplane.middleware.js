const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req,res,next){
    if(!req.body.modelNo){
        return res.status(StatusCodes.BAD_REQUEST).json({
            sucess:false,
            message:"something went wrong",
            error:{message:"model no not provided as per the condition"},
            data:{}
        })
    }
    next();
}

module.exports={
    validateCreateRequest
}