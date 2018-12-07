import * as baseService from './base';

export default class EventService {
    all(query) {
        return baseService.get(
            `/api/event${baseService.getQueryString(query)}`,
        );
    }

    create(model) {
        return baseService.post('/api/event', model);
    }

    read(id) {
        return baseService.get(`/api/event/${id}`);
    }

    update(id, model) {
        return baseService.put(`/api/event/${id}`, model);
    }

    destroy(id) {
        return baseService.destroy(`/api/event/${id}`);
    }
}
