import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rating from '../images/ratings.png';

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
                        <img src={rating} style={{ width: 'auto', height: '30px' }} alt="rating" />
                        <br />
                        <p className="card-text">{review.text}</p>
                        <p>{review.date}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>

            )
        })

    }

}

export default Reviews;