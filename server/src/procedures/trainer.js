import { procedure } from './db'

function all(args){
    return procedure(`spGetTrainers`, args).then((res) => {
        return res[0];
    })
}

function create(args){
    return procedure(`spInsertTrainer`, args).then((res) => {
       return res[0][0]; 
    })
}

function update(args){
    return procedure(`spUpdateTrainer`, args).then((res) => {
        return true;
    })
}

function destroy(args){
    return procedure(`spDeleteTrainer`, args).then((res) => {
        return true;
        
    })
}

function getByService(args){
    return procedure(`spGetTrainerByService`, args).then((res)=> {
        return res[0][0];
    })
}

function getByRating(args){
    return procedure(`spGetTrainerByRating`, args).then((res)=>{
        return res[0][0]
    })
}

function getTrainer(args){
    return procedure(`spGetTrainer`, args).then((res)=>{
        return res[0][0]
    })
}
export default {
    all,create,update,destroy,getByService,getByRating,getTrainer
}