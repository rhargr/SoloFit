import * as baseService from './base';

export default class AddressService {
    all() {
        return baseService.get('/api/address');
    }

    create(model) {
        return baseService.post('/api/address', model);
    }

    read(id) {
        return baseService.get(`/api/address/${id}`);
    }

    update(id, model) {
        return baseService.put(`/api/address/${id}`, model);
    }

    destroy(id) {
        return baseService.destroy(`/api/address/${id}`);
    }
}
