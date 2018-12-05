import Services from '../procedures/service';
import { client } from '../utils';

function all(req, res, next) {
    Services.all().then((services) => {
        res.json(services);
    });
}

function read(req, res, next) {
    Services.read([req.params.id]).then((service) => {
        res.json(service);
    });
}

function create(req, res, next) {
    const {name} = req.body;

    Services.create([name]).then((id) => {
        res.json(id);
    });
}

function destroy(req, res, next) {
    Services.destroy([req.params.id]).then(() => {
        res.end();
    });
}

function update(req, res, next) {
    const {name} = req.body;

    Services.update([
        req.params.id,
        name
    ]).then(() => {
        res.end();
    });
}

export default {
    all,
    create,
    read,
    update,
    destroy,
};
