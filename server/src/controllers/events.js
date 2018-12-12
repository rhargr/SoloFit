import Events from '../procedures/events';
import { client } from '../utils';

function all(req, res, next) {
    const { trainerId, traineeId } = req.query;

    Events.all([traineeId, trainerId]).then((events) => {
        res.json(events);
    });
}

function read(req, res, next) {
    Events.read([req.params.id]).then((events) => {
        const {start, end} = events;
        const e = {
            ...client(events),
            start,
            end
        }
        res.json(e);
    });
}

function create(req, res, next) {
    const {
        traineeId,
        trainerId,
        serviceId,
        description,
        end,
        start,
        title,
    } = req.body;

    Events.create([
        +traineeId,
        +trainerId,
        +serviceId,
        description,
        end,
        start,
        title,
    ]).then((id) => {
        res.json(id);
    });
}

function destroy(req, res, next) {
    Events.destroy([req.params.id]).then(() => {
        res.end();
    });
}

function update(req, res, next) {
    const {
        traineeId,
        trainerId,
        serviceId,
        description,
        end,
        start,
        title,
    } = req.body;

    Events.update([
        req.params.id,
        traineeId,
        trainerId,
        serviceId,
        description,
        end,
        start,
        title,
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
