import { callProcedure as procedure } from '../config/db'

function all(args){
    return procedure(`spGetTrainerByService`, args).then((res) => {
        return res[0];
    })
}

// function create(args){
//     return procedure(`spInsertTrainer`, args).then((res) => {
//        return res[0][0]; 
//     })
// }

// function update(args){
//     return procedure(`spUpdateTrainer`, args).then((res) => {
//         return true;
//     })
// }

// function destroy(args){
//     return procedure(`spDeleteTrainer`, args).then((res) => {
//         return true;
        
//     })
// }