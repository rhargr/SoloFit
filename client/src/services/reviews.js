import * as baseService from './base';


function insert(data) {
    return baseService.post('/api/review', data);
}

function allReviewByTrainer(id) { 
    return baseService.get(`/api/review?trainerid=${id}`);
}

export { insert, allReviewByTrainer };