import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Rating from 'react-rating';
import ReviewRepository from '../repositories/review';

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.reviewRepo = new ReviewRepository();

        this.state = {
            reviews: [],
        }
    }

    componentDidMount() {
        console.log(this.props)
        const id = this.props.match.params.id


        this.reviewRepo.getReviewsByTrainer(id).then((reviews) => {
            console.log(reviews);
            let total = 0;

            reviews.forEach((review) => {
                total += +review.rating;
            });

            console.log(this.props);

            this.props.handleRating(total / reviews.length);

            this.setState({
                reviews,
            });
        });
    };

    render() {
        if (this.state.reviews.length === 0) {
            return <h3>This trainer currently has no reviews.</h3>;
        }

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

export default withRouter(Reviews);