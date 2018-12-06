import * as baseService from './base';

export default class NewServices {    
    all() {
        return baseService.get('/api/service');
    }

    create(model) {
        return baseService.post('/api/service', model);
    }

    read(id) {
        return baseService.get(`/api/service/${id}`);
    }

    update(id, model) {
        return baseService.put(`/api/service/${id}`, model);
    }

    destroy(id) {
        return baseService.destroy(`/api/service/${id}`);
    }
}