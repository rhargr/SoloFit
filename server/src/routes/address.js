import { Router } from 'express';
import Table from '../table';
import Address from '../controllers/address'

let router = Router();
let addressTable = new Table('Address');

router.get('/', Address.all);

router.post('/', Address.create);

router.get('/:id', Address.read);

router.put('/:id', Address.update);

router.delete('/:id', Address.destroy);

export default router;