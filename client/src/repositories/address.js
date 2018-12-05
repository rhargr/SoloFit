import AddressService from '../services/address';

export default class AddressRepository {
    constructor() {
        this.addressSvc = new AddressService();
    }

    all() {
        return this.addressSvc.all();
    }

    create(model) {
        return this.addressSvc.create(model);
    }

    read(id) {
        return this.addressSvc.read(id);
    }

    update(id, model) {
        return this.addressSvc.update(id, model);
    }

    destroy(id) {
        return this.addressSvc.destroy(id);
    }
}