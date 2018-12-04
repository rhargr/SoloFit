import Trainers from '../procedures/trainer';
import { client, allClient } from '../utils';

function update(req, res, next) {
    const { id, name, age, email } = req.body;

    Trainers.update([id, name, age, email]).then(() => {
        res.end();
    });
}

function destroy(req, res, next) {
    const id = req.body.id;
    Trainers.destroy([id]).then(() => {
        res.end();
    });
}

function create(req, res, next) {
    const { name, age, email } = req.body;

    Trainers.create(
        [name, age, email].then((id) => {
            res.json(id);
        }),
    );
}

function read(req, res, next) {
    const id = req.params.id;

    Trainers.read([id]).then((trainer) => {
        res.json(trainer);
    });
}

function all(req, res, next) {
    Trainers.all().then((trainers) => {
        res.json(allClient(trainers));
    });
}

function getByService(req, res, next) {
    let serviceid = req.params.service_id;

    Trainers.getByService([serviceid]).then((service) => {
        res.json(service);
    });
}

function getByRating(req, res, next) {
    let ratingid = req.params.review_id;

    Trainers.getByRating([ratingid]).then((rating) => {
        res.json(rating);
    });
}

function getTrainer(req, res, next) {
    const id = req.params.id;

    Trainers.getTrainer([id]).then((ts) => {
        res.json(client(ts));
    });
}

export default {
    all,
    create,
    destroy,
    update,
    read,
    getByService,
    getByRating,
    getTrainer,
};
