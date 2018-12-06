import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import TrainerRepository from "../repositories/trainer";
import Rating from 'react-rating';

import caro2 from "../images/caro2.png";
import jumbo1 from "../images/jumbo.jpg";

class Trainers extends Component {
  constructor(props) {
    super(props);
    this.trainerRepo = new TrainerRepository();
    this.state = {
      initialRating: 3,  
      trainers: []
    };
  }

  componentDidMount() {
    this.trainerRepo.all().then(trainers => {
      console.log(trainers);
      this.setState({
        trainers
      });
    });
  }

  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-around",
          backgroundImage: `url(${jumbo1})`
        }}
      >
        <div className="row">
          {this.state.trainers.map(trainer => {
            return (
              <div key={trainer.id} className="col-sm-6">
                <div
                  className="card"
                  style={{
                    marginTop: "20px",
                    backgroundColor: "lightGray",
                    top: "50px"
                  }}
                >
                  <h5 className="card-header">{trainer.name}</h5>
                  <div className="card-body">
                    <div>
                      <img
                        style={{
                          borderRadius: "50%",
                          height: "200px",
                          width: "200px",
                          float: "left"
                        }}
                        className="proPic"
                        src={caro2}
                        alt="Profile Picture"
                      />
                    </div>
                    <div>
                      <h5 className="card-title">{trainer.city}</h5>
                      <p className="card-text">{trainer.age}</p>

                      <Rating
                        initialRating={this.state.initialRating}
                        readonly
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        style={{ color: "gold" }}
                      />

                      <Link
                        to={`/trainer/${trainer.id}`}
                        className="btn btn-secondary btn-sm"
                      >
                        View Trainer
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Trainers;
