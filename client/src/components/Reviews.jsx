import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import ReviewRepository from '../repositories/review';

class Reviews extends Component {
    constructor(props) {
        super(props);
        //console.log(ReviewRepository);
        this.reviewRepo = new ReviewRepository();

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        this.reviewRepo.all().then((reviews) => {
            console.log(reviews);
            this.setState({
                reviews,
            });
        });
    };

    render() {
        return this.state.reviews.map(review => {
            return (
                <div className="review-card" style={{ paddingBottom: '20px' }} key={review.id}>
                    <div className="card" style={{ textAlign: 'left' }}>
                        <div className="card-header">{review.name}</div>
                        <div className="card-body">
                            <Rating
                                initialRating={review.rating}
                                readonly
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                style={{ color: 'gold'}}
                            />
                            <br />
                            <p className="card-text">{review.text}</p>
                            <p>{review.date}</p>
                        </div>
                    </div>
                </div>

            )
        })

    }

}

export default Reviews;