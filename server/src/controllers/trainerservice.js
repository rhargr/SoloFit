import TrainerServices from '../procedures/trainerservice'


function create(req, res, next) {
    const {id, trainer_id, service_id} = req.body;

    TrainerServices.create([id, trainer_id, service_id]).then((id) => {
        res.json(id);
    });
}

function destroy(req, res, next) {
    TrainerServices.destroy([req.params.id]).then(() => {
        res.end();
    });
}

function update(req, res, next) {
    const { service_id, trainer_id} = req.body;

    TrainerServices.update([
        req.params.id,
        service_id,
        trainer_id
    ]).then(() => {
        res.end();
    });
}
function getByService(req, res, next) {
    let serviceid = req.params.id;

    TrainerServices.getByService([serviceid]).then((service) => {
        res.json(service);
    });
}

export default { create, destroy, update, getByService}