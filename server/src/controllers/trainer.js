import Trainers from './procedures/trainer';

function update(req, res, next){
    const { id, name, age, email } = req.body;

    Trainers.update([id , name, age, email]).then(()=>{
        res.end();
    })
}

function destroy(req, res, next){
    const id = req.body.id;
    Trainers.destroy([id]). then(()=>{
        res.end()
    })
}

function create(req, res, next){
    const{name, age, email} = req.body;

    Trainers.create([name, age, email].then((id)=>{
        res.json(id)
    }))
}

function read(req, res, next){
    const id = req.params.id;

    Trainers.read([id]).then((trainer)=>{
        res.json(trainer)
    })
}

function all(req, res, next) {
    Trainers.all().then((coaches)=>{
        res.json(coaches)
    })
}

function getByService(req, res, next) {
    Trainers
}