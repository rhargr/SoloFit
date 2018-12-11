import Users from '../procedures/user';

function update(req, res, next){
    const { id, name, age, email, hash } = req.body;

    Users.update([id , name, age, email, hash]).then(()=>{
        res.end();
    })
}

function destroy(req, res, next){
    const id = req.params.id;
    Users.destroy([id]). then(()=>{
        res.end()
    })
}

function me(req, res, next) {

}

function create(req, res, next){
    const{name, age, email, hash} = req.body;

    Users.create([name, age, email, hash]).then((id)=>{
        res.json(id)
    })
}

function read(req, res, next){
    const id = req.params.id;

    Users.getUser([id]).then((user)=>{
        res.json(user)
    })
}

function all(req, res, next) {
    Users.all().then((user)=>{
        console.log(user)
        res.json(user); 
    })
}

function getUser(req, res, next){
    const id = req.params.id;

    Users.getUser([id]).then((ts)=>{
        res.json(ts)
    })
}

export default { all, create, destroy, update, read, getUser}