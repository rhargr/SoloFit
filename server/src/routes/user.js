import { Router } from 'express';
import Users from '../controllers/User';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';

let router = Router();

router
    .get('/', Users.all)
    .get('/me', tokenMiddleware, isLoggedIn, Users.me)
    .get('/:id', Users.read)
    .post('/', Users.create)
    .put('/:id', Users.update)
    .delete('/:id', Users.destroy);

export default router;
