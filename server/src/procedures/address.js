import { procedure } from '../config/db'

function all(args){
    return procedure(`spGetAddress`, args).then((res) => {
        return res[0];
    })
}

function create(args){
    return procedure(`spInsertAddress`, args).then((res) => {
       return res[0][0]; 
    })
}

function update(args){
    return procedure(`spUpdateAddress`, args).then((res) => {
        return true;
    })
}

function destroy(args){
    return procedure(`spDeleteAddress`, args).then((res) => {
        return true;
        
    })
}

function destroyAddressByTrainer(args){
    return procedure(`spDeleteAddressByTrainer`, args).then((res)=> {
        return true;
    })
}

function getTrainerAddress(args){
    return procedure(`spGetAddressByTrainer`, args).then((res)=>{
        return res[0][0]
    })
}
export default {
    all,create,update,destroy,destroyAddressByTrainer,getTrainerAddress
}