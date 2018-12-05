import Addresses from '../procedures/address';
import { client } from '../utils';

function all(req, res, next) {
    Addresses.all().then((addresses) => {
        res.json(addresses);
    });
}

function read(req, res, next) {
    Addresses.read([req.params.id]).then((address) => {
        res.json(client(address));
    });
}

function create(req, res, next) {
    const {
        user_id,
        street1,
        street2,
        city,
        state,
        zip,
    } = req.body;

    Addresses.create([
        user_id,
        street1,
        street2,
        city,
        state,
        zip,
    ]).then((id) => {
        res.json(id);
    });
}

function destroy(req, res, next) {
    Addresses.destroy([req.params.id]).then(() => {
        res.end();
    });
}

function update(req, res, next) {
    const {
        user_id,
        street1,
        street2,
        city,
        state,
        zip,
    } = req.body;

    Addresses.update([
        req.params.id,
        user_id,
        street1,
        street2,
        city,
        state,
        zip,
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
