import NewServices from '../services/service';

export default class ServiceRepository {
    constructor() {
        this.serviceRepo = new NewServices();
    }

    all() {
        return this.serviceRepo.all();
    }

    create(model) {
        return this.serviceRepo.create(model);
    }

    read(id) {
        return this.serviceRepo.read(id);
    }

    update(id, model) {
        return this.serviceRepo.update(id, model);
    }

    destroy(id) {
        return this.serviceRepo.destroy(id);
    }
}