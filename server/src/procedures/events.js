import { callProcedure } from '../config/db';

function all(args) {
    return callProcedure(`spGetEvents`, args).then((res) => {
        return res[0];
    });
}

function read(args) {
    return callProcedure(`spGetEvent`, args).then((res) => {
        return res[0][0];
    });
}

function create(args) {
    return callProcedure(`spInsertEvent`, args).then((res) => {
        return res[0][0];
    });
}

function update(args) {
    return callProcedure(`spUpdateEvent`, args).then((res) => {
        return true;
    });
}

function destroy(args) {
    return callProcedure(`spDeleteEvent`, args).then((res) => {
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
