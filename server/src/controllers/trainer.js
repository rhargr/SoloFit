import Trainers from '../procedures/trainer';
import Addresses from '../procedures/address';
import Services from '../procedures/service';
import Reviews from '../procedures/review'
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
    // let = trainer;

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
        })
}

function getByService(req, res, next) {
    const serviceId = req.params.serviceId;
    let trainer;

    Trainers.getByService([serviceId]).then((t)=> {
        trainer = t
        console.log(t)
        res.send(t);
    })

    // Trainers.read([id]).then((t)=> {
    //     trainer = t

    //     return Services.read([t.user_id]);
    // })
    // .then((s) =>{
    //     trainer.service = s

    //     res.json(trainer);
    // })
}



function all(req, res, next) {
    Trainers.all().then((trainers) => {
        res.json(allClient(trainers));
    });
}



function getByRating(req, res, next) {
    const rating = req.params.rating;
    let trainer;

    Trainers.getByRating([rating]).then((t)=> {
        console.log(t)
        trainer = t
        res.send(t);
    })
    // .then((r) =>{
    //     trainer.review = r

    //     res.json(trainer);
    // })
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
