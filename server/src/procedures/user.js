import { procedure } from './db'

function all(args){
    return procedure(`spGetUsers`, args).then((res) => {
        return res[0];
    })
}

function create(args){
    return procedure(`spInsertUser`, args).then((res) => {
       return res[0][0]; 
    })
}

function update(args){
    return procedure(`spUpdateUser`, args).then((res) => {
        return true;
    })
}

function destroy(args){
    return procedure(`spDeleteUser`, args).then((res) => {
        return true;
        
    })
}

function getUser(args){
    return procedure(`spGetUser`, args).then((res)=>{
        return res[0][0]
    })
}
export default {
    all,create,update,destroy,getUser
}