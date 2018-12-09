import Trainees from '../procedures/trainee';
import { allClient } from '../utils';

function update(req, res, next) {
    const { id, name, age, email, hash } = req.body;

    Trainees.update([id, name, age, email, hash]).then(() => {
        res.end();
    });
}

function destroy(req, res, next) {
    const id = req.params.id;
    Trainees.destroy([id]).then(() => {
        res.end();
    });
}

function create(req, res, next) {
    const { name, age, email, hash } = req.body;

    Trainees.create([name, age, email, hash]).then((id) => {
        res.json(id);
    });
}

function read(req, res, next) {
    const id = req.params.id;

    Trainees.read([id]).then((trainee) => {
        res.json(trainee);
    });
}

function all(req, res, next) {
    Trainees.all().then((trainees) => {
        res.json(allClient(trainees));
    });
}

function getTrainee(req, res, next) {
    const id = req.params.id;

    Trainees.getTrainee([id]).then((ts) => {
        res.json(ts);
    });
}

export default { all, create, destroy, update, read, getTrainee };
