import Trainees from '../procedures/trainee';

function update(req, res, next){
    const { id, name, age, email } = req.body;

    Trainees.update([id , name, age, email]).then(()=>{
        res.end();
    })
}

function destroy(req, res, next){
    const id = req.body.id;
    Trainees.destroy([id]). then(()=>{
        res.end()
    })
}

function create(req, res, next){
    const{name, age, email} = req.body;

    Trainees.create([name, age, email]).then((id)=>{
        res.json(id)
    })
}

function read(req, res, next){
    const id = req.params.id;

    Trainees.read([id]).then((trainee)=>{
        res.json(trainee)
    })
}

function all(req, res, next) {
    Trainees.all().then((client)=>{
        console.log(client)
        res.json(client); 
    })
}

function getTrainee(req, res, next){
    const id = req.params.id;

    Trainees.getTrainee([id]).then((ts)=>{
        res.json(ts)
    })
}

export default { all, create, destroy, update, read, getTrainee}