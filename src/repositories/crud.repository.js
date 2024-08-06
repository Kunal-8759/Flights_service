
class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        const response=await this.model.create(data);
        return response;
        //if any Error comes here this gets transferred to the Service layer
    }

    async delete(data){
        try {
            const response=await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            console.log('error while deleting the data in the repository');
            throw error;
        }
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
        try {
            const response=await this.model.findAll();
            return response;
        } catch (error) {
            console.log('error while getting the data in the repository');
            throw error;
        }
    }

    async get(id){
        try {
            const response =await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log('error while getting the data in the repository');
            throw error;
        }
    }
    

}

module.exports=CrudRepository