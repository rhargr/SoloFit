import { Router } from 'express';
import Rooms from '../controllers/rooms'

let router = Router();

router 
    .get('/', Rooms.all)
    .post('/', Rooms.create);

export default router;