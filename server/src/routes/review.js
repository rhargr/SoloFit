import { Router } from 'express';
import Table from '../table';

let router = Router();
let reviewTable = new Table('Review');

router.get('/', async (req, res) => {
    console.log(req.user);
    try {
        let reviews = await reviewTable.getAll()
        res.json(reviews);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        // idObj will look like { id: 7 }
        let idObj = await reviewTable.insert({
            text: req.body.text,
            rating: req.body.rating,
            trainee_id: req.body.trainee_id,
            trainer_id: req.body.trainer_id
        });
        res.status(201).json(idObj);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let foundReviews = await reviewTable.getOne(req.params.id);
        res.json(foundReviews);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    try {
        // not concerned about getting a value back, just waiting on update to finish
        await reviewTable.update(req.params.id, req.body);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // not concerned about getting a value back, just waiting on delete to finish
        await reviewTable.delete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;