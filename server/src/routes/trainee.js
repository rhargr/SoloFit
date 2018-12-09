import { Router } from 'express';
import Trainees from '../controllers/trainee';

let router = Router();




router.get('/', Trainees.all)
router.post('/', Trainees.create)
router.get('/:id', Trainees.getTrainee)
router.put('/:id', Trainees.update)
router.delete('/:id', Trainees.destroy);


export default router;
