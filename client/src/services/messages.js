import * as baseService from './base';

export default class MessagesService {    
    all(query) {
        return baseService.get(`/api/messages${baseService.getQueryString(query)}`);
    }

    create(model) {
        return baseService.post('/api/messages', model);
    }
}
