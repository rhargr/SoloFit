import { callProcedure } from '../config/db';

function all(args) {
    return callProcedure(`spGetServices`, args).then((res) => {
        return res[0];
    });
}

function read(args) {
    return callProcedure(`spGetService`, args).then((res) => {
        return res[0][0];
    });
}

function create(args) {
    return callProcedure(`spInsertService`, args).then((res) => {
        return res[0][0];
    });
}

function update(args) {
    return callProcedure(`spUpdateService`, args).then((res) => {
        return true;
    });
}

function destroy(args) {
    return callProcedure(`spDeleteService`, args).then((res) => {
        return true;

    });
}



export default {
    all,
    create,
    read,
    update,
    destroy,
};