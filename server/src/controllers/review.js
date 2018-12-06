import Reviews from '../procedures/review';

function update(req, res, next) {
    const { text, rating, trainer_id, trainee_id } = req.body;

    Reviews.update([text, rating, trainer_id, trainee_id]).then(() => {
        res.end();
    });
}

function destroy(req, res, next) {
    const id = req.body.id;
    Reviews.destroy([id]).then(() => {
        res.end();
    });
}

function create(req, res, next) {
    const { text, rating, trainer_id, trainee_id } = req.body;

    Reviews.create([trainer_id, trainee_id, text, rating]).then((id) => {
        res.json(id);
    });
}

function read(req, res, next) {

    const id = req.params.id;
    console.log(id);
    Reviews.read([id]).then((rating) => {
        res.json(rating);
    });
}

function all(req, res, next) {
    Reviews.all().then((rating) => {
        console.log(rating);
        res.json(rating);
    });
}

function getReviewsByTrainer(req, res, next) {
    let id = req.params.trainer_id;
    Reviews.read([id]).then(() => {
        res.end();
    });
}

function getReviewsByTrainee(req, res, next) {
    let id = req.params.trainer_id;
    Reviews.getReviewsByTrainee([id]).then(() => {
        res.end();
    });
}

export default {
    update,
    destroy,
    create,
    read,
    all,
    getReviewsByTrainee,
    getReviewsByTrainer
};