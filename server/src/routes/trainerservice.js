import { Router } from 'express';

import TrainerServices from '../controllers/trainerservice';

let router = Router();



    router.post('/', TrainerServices.create)
    router.put('/:id', TrainerServices.update)
    router.delete('/:id', TrainerServices.destroy);

export default router;