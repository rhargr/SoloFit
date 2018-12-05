import { Router } from 'express';
import Table from '../table';
import TrainerServices from '../controllers/trainerservice'

let router = Router();
let tsTable = new Table('trainerservice');

// router 
//     .get('/', TrainerServices.all)
//     .get('/:id', TrainerServices.read)
//     .post('/', TrainerServices.create)
//     .put('/:id', TrainerServices.update)
//     .delete('/:id', TrainerServices.destroy);

// export default router;


router.get('/', async (req, res) => {
    console.log(req.user);
    try {
        let trainservice = await tsTable.getAll()
        res.json(trainservice);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        // idObj will look like { id: 7 }
        let idObj = await tsTable.insert({
            trainer_id: req.body.trainer_id,
            service_id: req.body.service_id,
            description: req.body.description
        });
        res.status(201).json(idObj);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
    try { 
        let foundTs = await tsTable.getOne(req.params.id);
        res.json(foundTs);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    try {
        // not concerned about getting a value back, just waiting on update to finish
        await tsTable.update(req.params.id, req.body);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // not concerned about getting a value back, just waiting on delete to finish
        await tsTable.delete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;