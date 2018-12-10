import Messages from '../procedures/messages';
import { client } from '../utils';

function all(req, res, next) {
    const { roomId } = req.query;

    Messages.all([roomId]).then((messages) => {
        res.json(messages);
    });
}

function create(req, res, next) {
    const {
        roomId,
        senderId,
        message
    } = req.body;

    Messages.create([
      roomId,
      senderId,
      message
    ]).then((id) => {
        res.json(id);
    });
}

export default {
    all,
    create,
};
