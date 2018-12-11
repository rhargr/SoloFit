import * as userSvc from '../services/user';

export default class UserRepository {
    me() {
        return userSvc.me();
    }
}
