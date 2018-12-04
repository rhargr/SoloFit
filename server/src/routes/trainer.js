import { Router } from 'express';
import Table from '../table';
import Trainers from '../controllers/trainer';
// import Ratings from '../controllers/review'

let router = Router();
let trainerTable = new Table('trainer');

router.get('/', async (req, res) => {
    console.log(req.user);
    try {
        // let trainers = await trainerTable.getAll()
        let trainers = await Trainers.all(req, res);
        // res.json(trainers);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        // idObj will look like { id: 7 }
        let idObj = await trainerTable.insert({
            user_id: req.body.user_id,
        });
        res.status(201).json(idObj);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/:id', Trainers.getTrainer);

// router.get('/:id', async (req, res) => {
//     try {
//         let foundTrainer = await trainerTable.getOne(req.params.id);
//         res.json(foundTrainer);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });
// router.get('/:id', Ratings.getTrainingByRating)

router.put('/:id', Trainers.update);

// router.put('/:id', async (req, res) => {
//     try {
//         // not concerned about getting a value back, just waiting on update to finish
//         await trainerTable.update(req.params.id, req.body);
//         res.sendStatus(200);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

router.delete('/:id', async (req, res) => {
    try {
        // not concerned about getting a value back, just waiting on delete to finish
        await trainerTable.delete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;
