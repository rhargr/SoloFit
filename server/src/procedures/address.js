import { callProcedure } from '../config/db';

function all(args) {
    return callProcedure(`spGetAddresses`, args).then((res) => {
        return res[0];
    });
}

function read(args) {
    return callProcedure(`spGetAddress`, args).then((res) => {
        return res[0][0];
    });
}

function create(args) {
    return callProcedure(`spInsertAddress`, args).then((res) => {
        return res[0][0];
    });
}

function update(args) {
    return callProcedure(`spUpdateAddress`, args).then((res) => {
        return true;
    });
}

function destroy(args) {
    return callProcedure(`spDeleteAddress`, args).then((res) => {
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