import { Router } from 'express';
import Table from '../table';
import Trainers from '../controllers/trainer';
// import Ratings from '../controllers/review'

let router = Router();

router
    .get('/', Trainers.all)
    .post('/', Trainers.create)
    .get('/:id', Trainers.getTrainer)
    .put('/:id', Trainers.update)
    .delete('/:id', Trainers.destroy);

export default router;
