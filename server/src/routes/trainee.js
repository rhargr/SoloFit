import { Router } from 'express';
import Table from '../table';
import Trainees from '../controllers/trainee';

let router = Router();
let traineeTable = new Table('Trainee');

router.get('/', Trainees.all);

router.post('/', Trainees.create);

// router.post('/', async (req, res) => {
//     try {
//         // idObj will look like { id: 7 }
//         let idObj = await traineeTable.insert({
//             user_id: req.body.user_id,
//         });
//         res.status(201).json(idObj);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

router.get('/:id', Trainees.getTrainee);

// router.get('/:id', async (req, res) => {
//     try {
//         let foundTrainee = await traineeTable.getOne(req.params.id);
//         res.json(foundTrainee);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

router.put('/:id', async (req, res) => {
    try {
        // not concerned about getting a value back, just waiting on update to finish
        await traineeTable.update(req.params.id, req.body);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // not concerned about getting a value back, just waiting on delete to finish
        await traineeTable.delete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;
