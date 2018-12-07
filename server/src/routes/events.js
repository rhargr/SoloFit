import { Router } from 'express';
import Events from '../controllers/events';

let router = Router();

router
    .get('/', Events.all)
    .post('/', Events.create)
    .get('/:id', Events.read)
    .put('/:id', Events.update)
    .delete('/:id', Events.destroy);

export default router;
