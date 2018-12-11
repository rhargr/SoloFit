import * as baseService from './base';

export default class RoomsService {    
    all() {
        return baseService.get('/api/rooms');
    }

    create(model) {
        return baseService.post('/api/rooms', model);
    }

    read(id) {
        return baseService.get(`/api/rooms/${id}`);
    }
}
