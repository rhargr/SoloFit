import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Rating from 'react-rating';
import ReviewRepository from '../repositories/review';
import Nav1 from './Nav1';
import UserRepository from '../repositories/user';
import bgPic from '../images/stairs.jpg';

class ClientRate extends Component {
    constructor(props) {
        super(props);
        this.reviewRepo = new ReviewRepository();
        this.userRepo = new UserRepository();

        this.handleRatingClick = this.handleRatingClick.bind(this);
        this.handleTextRate = this.handleTextRate.bind(this);
        this.onCreateReview = this.onCreateReview.bind(this);

        this.state = {
            rating: 0,
            text: '',
            me: {
                id: '',
            },
        };
    }

    onCreateReview = () => {
        let trainerId = this.props.match.params.trainerId;

        let traineeId = 71;

        const review = {
            rating: this.state.rating,
            text: this.state.text,
            trainer_id: trainerId,
            trainee_id: 71,
        };

        this.reviewRepo.create(review).then((res) => {
            this.props.history.push(`/trainer/${trainerId}`);
        });
    };

    handleRatingClick(value) {
        this.setState({ rating: value });
    }

    handleTextRate(e) {
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <Nav1 />
                <div
                    style={{
                        minHeight: '100vh',
                        backgroundImage: `url(${bgPic})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <div>
                        <div
                            className="card-container"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                paddingTop: '300px',
                            }}>
                            <div className="card w-50" style={{ opacity: 0.8 }}>
                                <div className="card-body">
                                    <h5
                                        className="card-title"
                                        style={{
                                            fontFamily: 'Oswald',
                                            fontSize: '30px',
                                        }}>
                                        Rate
                                    </h5>
                                    <div className="rate-div">
                                        <Rating
                                            initialRating={this.state.rating}
                                            emptySymbol="fa fa-star-o fa-2x"
                                            fullSymbol="fa fa-star fa-2x"
                                            style={{
                                                color: 'gold',
                                                whiteSpace: 'nowrap',
                                            }}
                                            onClick={this.handleRatingClick}
                                        />
                                    </div>
                                    <div className="text-div">
                                        <div
                                            className="form-group col-md-6"
                                            style={{
                                                flex: '1',
                                                maxWidth: '100%',
                                                padding: '0px',
                                            }}>
                                            <label htmlFor="inputCity" />
                                            <textarea
                                                type="text-area"
                                                className="form-control"
                                                id="input"
                                                name="review"
                                                placeholder="Leave a review..."
                                                onChange={this.handleTextRate}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-lg btn-outline-dark my-2 my-sm-0"
                                            style={{
                                                padding: '0px',
                                                paddingLeft: '10px',
                                                paddingRight: '10px',
                                                fontFamily: 'Oswald',
                                            }}
                                            type="button"
                                            onClick={this.onCreateReview}>
                                            Post Rating
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(ClientRate);
