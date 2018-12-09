import { callProcedure as procedure } from '../config/db';

function all(args) {
    return procedure(`spGetMessages`, args).then((res) => {
        return res[0];
    });
}

function create(args) {
    return procedure(`spInsertMessage`, args).then((res) => {
        return res[0][0];
    });
}


export default {
    all,
    create,
};