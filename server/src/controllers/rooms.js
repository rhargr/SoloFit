import Rooms from '../procedures/rooms';
import { client } from '../utils';

function all(req, res, next) {
    const { userId } = req.query;

    Rooms.all([+userId]).then((rooms) => {
        res.json(rooms);
    });
}

function create(req, res, next) {
    const {
        userId_1,
        userId_2,
    } = req.body;

    Rooms.create([
        userId_1,
        userId_2,
    ]).then((id) => {
        res.json(id);
    });
}

export default {
    all,
    create,
};
