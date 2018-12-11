import { Router } from 'express';
import Services from '../controllers/service'

let router = Router();

router 
    .get('/', Services.all)
    .get('/:id', Services.read)
    .post('/', Services.create)
    .put('/:id', Services.update)
    .delete('/:id', Services.destroy);

export default router;
