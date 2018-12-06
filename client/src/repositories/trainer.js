import TrainerService from '../services/trainer';

export default class TrainerRepository {
    constructor() {
        this.trainerSvc = new TrainerService();
    }

    all() {
        return this.trainerSvc.all();
    }

    create(model) {
        return this.trainerSvc.create(model);
    }

    read(id) {
        return this.trainerSvc.read(id);
    }

    update(id, model) {
        return this.trainerSvc.update(id, model);
    }

    destroy(id) {
        return this.trainerSvc.destroy(id);
    }
}