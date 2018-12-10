import { Router } from 'express';
import Messages from '../controllers/messages'

let router = Router();

router 
    .get('/', Messages.all)
    .post('/', Messages.create);

export default router;