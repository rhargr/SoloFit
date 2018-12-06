import { callProcedure as procedure } from '../config/db'


function all(args){
    return procedure(`spGetTrainees`, args).then((res) => {
        return res[0];
    })
}

function create(args){
    return procedure(`spInsertTrainee`, args).then((res) => {
       return res[0][0]; 
    })
}

function update(args){
    return procedure(`spUpdateTrainee`, args).then((res) => {
        return true;
    })
}

function destroy(args){
    return procedure(`spDeleteTrainee`, args).then((res) => {
        return true;
        
    })
}

function getTrainee(args){
    return procedure(`spGetTrainee`, args).then((res)=>{
        return res[0][0]
    })
}
export default {
    all,create,update,destroy,getTrainee
}