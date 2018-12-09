import { Router } from 'express';
import Trainers from '../controllers/trainer';

let router = Router();

router
    .get('/', Trainers.all)
    .post('/', Trainers.create)
    .get('/:id', Trainers.read)
    .put('/:id', Trainers.update)
    .delete('/:id', Trainers.destroy)
    .get('/rating/:rating', Trainers.getByRating)
    .get('/service/:serviceId', Trainers.getByService);

export default router;
