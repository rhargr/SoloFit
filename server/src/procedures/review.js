import { callProcedure as procedure } from '../config/db';

function all(args) {
    return procedure(`spGetReviews`, args).then((res) => {
        return res[0];
    });
}

function create(args) {
    return procedure(`spInsertReview`, args).then((res) => {
        return res[0][0];
    });
}

function update(args) {
    return procedure(`spUpdateReview`, args).then((res) => {
        return true;
    });
}

function destroy(args) {
    return procedure(`spDeleteReview`, args).then((res) => {
        return true;
    });
}
function read(args) {
    return procedure(`spGetReviewsByTrainer`, args).then((res) => {
        return res[0];
    });
}

function getReviewsByTrainee(args) {
    return procedure(`spGetReviewsByTrainee`, args).then((res) => {
        return res[0][0];
    });
}
export default {
    all,
    create,
    update,
    destroy,
    read,
    getReviewsByTrainee,
};