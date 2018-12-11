import MessagesService from '../services/messages';

export default class MessagesRepository {
    constructor() {
        this.messagesSvc = new MessagesService();
    }

    all() {
        return this.messagesSvc.all();
    }

    create(model) {
        return this.messagesSvc.create(model);
    }
}