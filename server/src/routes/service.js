import { Router } from 'express';
import Services from '../controllers/service'

let router = Router();

router 
    .get('/', Services.all)
    .get('/:id', Services.read)
    .post('/', Services.create)
    .put('/:id', Services.update)
    .delete('/:id', Services.destroy)
    // .get('/:id', Services.getByService);

export default router;


// router.get('/', async (req, res) => {
//     console.log(req.user);
//     try {
//         let services = await serviceTable.getAll()
//         res.json(services);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// router.post('/', async (req, res) => {
//     try {
//         // idObj will look like { id: 7 }
//         let idObj = await serviceTable.insert({
//             name: req.body.name,
            
//         });
//         res.status(201).json(idObj);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// router.get('/:id', async (req, res) => {
//     try {
//         let foundService = await serviceTable.getOne(req.params.id);
//         res.json(foundService);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// router.put('/:id', async (req, res) => {
//     try {
//         // not concerned about getting a value back, just waiting on update to finish
//         await serviceTable.update(req.params.id, req.body);
//         res.sendStatus(200);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         // not concerned about getting a value back, just waiting on delete to finish
//         await serviceTable.delete(req.params.id);
//         res.sendStatus(200);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// export default router;