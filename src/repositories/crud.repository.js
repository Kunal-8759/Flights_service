const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/Errors/app.error");

class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        const response=await this.model.create(data);
        return response;
        //if any Error comes here this gets transferred to the Service layer
    }

    async destroy(id){
        const response=await this.model.destroy({
            where:{
                id:id
            }
        });

        if(!response){
            throw new AppError('The resource you want to delete is not present',StatusCodes.NOT_FOUND);
        }
        return response;

        
    }

    async update(data){ //data:{col1:val1 ,col2:val2}
        try {
            const response=await this.model.update(data,{
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            console.log('error while updating the data in the repository');
            throw error;
        }
    }

    async getAll(){  
        const response=await this.model.findAll();
        return response;  
    }

    async get(id){
        const response =await this.model.findByPk(id);
        if(!response){
            throw new AppError('the resource you requested is not present',StatusCodes.NOT_FOUND);
        }
        return response;
    }
    

}

module.exports=CrudRepository