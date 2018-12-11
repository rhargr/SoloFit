import MessagesService from '../services/messages';

export default class MessagesRepository {
    constructor() {
        this.messagesSvc = new MessagesService();
    }

    all(query) {
        return this.messagesSvc.all(query);
    }

    create(model) {
        return this.messagesSvc.create(model);
    }
}