// import Users from './procedures/user';

// function update(req, res, next){
//     const { id, name, age, email } = req.body;

//     Tra.update([id , name, age, email]).then(()=>{
//         res.end();
//     })
// }

// function destroy(req, res, next){
//     const id = req.body.id;
//     Trainers.destroy([id]). then(()=>{
//         res.end()
//     })
// }

// function create(req, res, next){
//     const{name, age, email} = req.body;

//     Trainers.create([name, age, email].then((id)=>{
//         res.json(id)
//     }))
// }

// function read(req, res, next){
//     const id = req.params.id;

//     Trainers.read([id]).then((trainer)=>{
//         res.json(trainer)
//     })
// }

// function all(req, res, next) {
//     Trainers.all().then((coaches)=>{
//         res.json(coaches);
//     })
// }

// function getByService(req, res, next) {
//     let serviceid = req.params.service_id
    
//     Trainers.read([serviceid]).then((service)=>{
//         res.json(service);
//     })
// }

// function getByRating(req, res, next){
//     let ratingid = req.params.review_id

//     Trainers.read()[ratingid].then((rating)=>{
//         res.json(rating);
//     })
// }

// function getTrainer(req, res, next){
//     let 
// }