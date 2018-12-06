import { callProcedure as procedure } from '../config/db';


function create(args) {
    return procedure(`spInsertTrainerService`, args).then((res) => {
        console.log('insert res', res);
        return res[0][0];
    });
}

function update(args) {
    return procedure(`spUpdateTrainerService`, args).then((res) => {
        return true;
    });
}

function destroy(args) {
    return procedure(`spDeleteTrainerService`, args).then((res) => {
        return true;
    });
}

function getByService(args) {
    return procedure(`spGetTrainerByService`, args).then((res) => {
        return res[0][0];
    });
}




export default {
    create,
    update,
    destroy,
    getByService
  
   
};
