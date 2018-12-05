import ReviewService from '../services/review';

export default class ReviewRepository {
    constructor() {
        this.reviewSvc = new ReviewService();
    }

    all() {
        return this.reviewSvc.all();
    }

    create(model) {
        return this.reviewSvc.create(model);
    }

    read(id) {
        return this.reviewSvc.read(id);
    }

    update(id, model) {
        return this.reviewSvc.update(id, model);
    }

    destroy(id) {
        return this.reviewSvc.destroy(id);
    }
}