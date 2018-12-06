import { callProcedure as procedure } from '../config/db';

function all(args) {
    return procedure(`spGetTrainers`, args).then((res) => {
        return res[0];
    });
}

function create(args) {
    return procedure(`spInsertTrainer`, args).then((res) => {
        console.log('insert res', res);
        return res[0][0];
    });
}

function update(args) {
    return procedure(`spUpdateTrainer`, args).then((res) => {
        return true;
    });
}

function destroy(args) {
    return procedure(`spDeleteTrainer`, args).then((res) => {
        return true;
    });
}



function getByRating(args) {
    return procedure(`spGetTrainerByRating`, args).then((res) => {
        return res[0][0];
    });
}

function read(args) {
    return procedure(`spGetTrainer`, args).then((res) => {
        return res[0][0];
    });
}

export default {
    all,
    create,
    update,
    destroy,
    read,
    getByService,
    getByRating,
};
