import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

class Reviews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [
                {
                    name: 'Rob',
                    text: 'It was alright',
                    date: '12/13/18'
                },
                {
                    name: 'Drayton',
                    text: 'Was good',
                    date: '12/23/18'
                },
                {
                    name: 'Ray',
                    text: 'Great!',
                    date: '12/56/18'
                },
                {
                    name: 'ash',
                    text: 'rather eat cake',
                    date: '12/30/18'
                }
            ]
        }
    }

    // componentDidMount() {
    //     fetch('https://ghibliapi.herokuapp.com/films')
    //         .then((res) => res.json())
    //         .then((films) => {
    //             this.setState({
    //                 films,
    //             })
    //         })
    // }

    render() {
        return this.state.reviews.map(review => {
            return (
                <div className="review-card" style={{ paddingBottom: '20px' }} key={review.id}>
                    <div className="card" style={{ textAlign: 'left' }}>
                        <div className="card-header">{review.name}</div>
                        <div className="card-body">
                            <Rating
                                initialRating={3}
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