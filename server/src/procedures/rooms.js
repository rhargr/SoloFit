import { callProcedure as procedure } from '../config/db';

function all(args) {
    return procedure(`spGetRooms`, args).then((res) => {
        return res[0];
    });
}

function create(args) {
    return procedure(`spInsertRoom`, args).then((res) => {
        return res[0][0];
    });
}

function read(args) {
    return procedure(`spGetRoom`, args).then((res) => {
        return res[0][0];
    });
}

export default {
    all,
    create,
    read
};