import * as baseService from './base';

export default class MessagesService {    
    all() {
        return baseService.get('/api/messages');
    }

    create(model) {
        return baseService.post('/api/messages', model);
    }
}
