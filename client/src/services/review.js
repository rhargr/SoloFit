import * as baseService from './base';

export default class ReviewService {    
    all() {
        return baseService.get('/api/review');
    }

    create(model) {
        return baseService.post('/api/review', model);
    }

    read(id) {
        return baseService.get(`/api/review/${id}`);
    }

    update(id, model) {
        return baseService.put(`/api/review/${id}`, model);
    }

    destroy(id) {
        return baseService.destroy(`/api/review/${id}`);
    }
    getReviewsByTrainer(id) {
        return baseService.get(`api/review/trainer/${id}`)
    }
}
