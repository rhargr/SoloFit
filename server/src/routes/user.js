import { Router } from 'express';
import Users from '../controllers/User';

let router = Router();

router
    .get('/', Users.all)
    .get('/me', Users.me)
    .get('/:id', Users.read)
    .post('/', Users.create)
    .put('/:id', Users.update)
    .delete('/:id', Users.destroy)
    .get('/:id', Users.getUser);

export default router;
