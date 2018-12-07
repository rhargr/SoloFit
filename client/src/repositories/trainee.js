import TraineeService from '../services/trainee';

export default class TraineeRepository {
    constructor() {
        this.traineeSvc = new TraineeService();
    }

    all() {
        return this.traineeSvc.all();
    }

    create(model) {
        return this.traineeSvc.create(model);
    }

    read(id) {
        return this.traineeSvc.read(id);
    }

    update(id, model) {
        return this.traineeSvc.update(id, model);
    }

    destroy(id) {
        return this.traineeSvc.destroy(id);
    }
}
