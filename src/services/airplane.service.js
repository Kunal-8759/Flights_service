
const {AirplaneRepository}=require('../repositories');

const airplaneRespository=new AirplaneRepository();

// data:{modelNo,capacity}
async function createAirplane(data){
    try {
        const airplane=await airplaneRespository.create(data);
        return airplane;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports={
    createAirplane
}