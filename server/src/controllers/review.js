import Ratings from '../procedures/review';

function update(req, res, next){
    const { user_id, address, latitude, longitude} = req.body;

    Addresses.update([user_id, address, latitude, longitude]).then(()=>{
        res.end();
    })
}

function destroy(req, res, next){
    const id = req.body.id;
    Addresses.destroy([id]). then(()=>{
        res.end()
    })
}

function create(req, res, next){
    const{user_id, address, latitude, longitude} = req.body;

    Addresses.create([user_id, address, latitude, longitude]).then((id)=>{
        res.json(id)
    })
}

function read(req, res, next){
    const id = req.params.id;

    Addresses.read([id]).then((address)=>{
        res.json(address)
    })
}

function all(req, res, next) {
    Addresses.all().then((address)=>{
        console.log(address)
        res.json(address); 
    })
}

function destroyAddressByTrainer(req, res, next) {
    let id = req.params.trainer_id
    Addresses.destroy([id]).then(()=>{
        res.end()

    })
}