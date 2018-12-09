import { Router } from 'express';
import Table from '../table';
import Reviews from '../controllers/review'

let router = Router();

    router.get('/', Reviews.all)
    router.get('/trainer/:id', Reviews.getReviewsByTrainer)
    router.get('/:id', Reviews.read)
    router.post('/', Reviews.create)
    router.put('/:id', Reviews.update)
    router.delete('/:id', Reviews.destroy);
    
    

export default router;
