import { callProcedure as procedure } from '../config/db';

function create(args) {
    return procedure(`spInsertTrainerService`, args).then((res) => {
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

export default {
    create,
    update,
    destroy,
};
