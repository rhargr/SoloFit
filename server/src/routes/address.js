import { Router } from 'express';
import Addresses from '../controllers/address';

let router = Router();

router 
    .get('/', Addresses.all)
    .get('/:id', Addresses.read)
    .post('/', Addresses.create)
    .put('/:id', Addresses.update)
    .delete('/:id', Addresses.destroy);

export default router;