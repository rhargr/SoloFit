import * as baseService from './base';

export default class TrainerService {    
    all() {
        return baseService.get('/api/trainer');
    }

    create(model) {
        return baseService.post('/api/trainer', model);
    }

    read(id) {
        return baseService.get(`/api/trainer/${id}`);
    }

    update(id, model) {
        return baseService.put(`/api/trainer/${id}`, model);
    }

    destroy(id) {
        return baseService.destroy(`/api/trainer/${id}`);
    }
}