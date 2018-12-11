import { Router } from 'express';

import TrainerServices from '../controllers/trainerservice';

let router = Router();

router
    .post('/', TrainerServices.create)
    .put('/:id', TrainerServices.update)
    .delete('/:id', TrainerServices.destroy);

export default router;