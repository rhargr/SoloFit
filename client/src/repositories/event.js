import EventService from '../services/event';

export default class EventRepository {
    constructor() {
        this.eventSvc = new EventService();
    }

    all(query) {
        return this.eventSvc.all(query);
    }

    create(model) {
        return this.eventSvc.create(model);
    }

    read(id) {
        return this.eventSvc.read(id);
    }

    update(id, model) {
        return this.eventSvc.update(id, model);
    }

    destroy(id) {
        return this.eventSvc.destroy(id);
    }
}
