import * as baseService from './base';

export default class TraineeService {
    all() {
        return baseService.get('/api/trainee');
    }

    create(model) {
        return baseService.post('/api/trainee', model);
    }

    read(id) {
        return baseService.get(`/api/trainee/${id}`);
    }

    update(id, model) {
        return baseService.put(`/api/trainee/${id}`, model);
    }

    destroy(id) {
        return baseService.destroy(`/api/trainee/${id}`);
    }
}
