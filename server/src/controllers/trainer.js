import Trainers from '../procedures/trainer';
import Addresses from '../procedures/address';
import TrainerServices from "../procedures/trainerservice"
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
    const { name, age, email, hash} = req.body;
    let = trainer;

    console.log('creating this user', req.body);

    Trainers.create([name, age, email, hash])
        .then((id) => {
            return res.json(id);
        })
        // .then((trainerId) => {
        //     trainer = t
        //     console.log('updating address table now');
        //     return Addresses.create(([t.user_id]))
        // });
}

function read(req, res, next) {
    const id = req.params.id;
    let trainer;

    Trainers.read([id]).then((t) => {
        trainer = t;
            
        return Addresses.read([t.user_id]);
    })
    .then((a) => {
            trainer.address = a;

            res.json(trainer);
        });
}

function all(req, res, next) {
    Trainers.all().then((trainers) => {
        res.json(allClient(trainers));
    });
}

function getByService(req, res, next) {
    let serviceid = req.params.id;

    TrainerServices.getByService([serviceid]).then((service) => {
        res.json(service);
    });
}

function getByRating(req, res, next) {
    let ratingid = req.params.review_id;

    Trainer.getByRating([ratingid]).then((rating) => {
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
