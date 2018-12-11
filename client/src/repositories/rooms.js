import RoomsService from '../services/rooms';

export default class RoomsRepository {
    constructor() {
        this.roomsSvc = new RoomsService();
    }

    all() {
        return this.roomsSvc.all();
    }

    create(model) {
        return this.roomsSvc.create(model);
    }
}