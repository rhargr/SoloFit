import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import TrainerRepository from "../repositories/trainer";
import Rating from "react-rating";

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
      <React.Fragment>

        <div style={{backgroundImage: `url(${jumbo1})`}}>

        {/* NAV SHIZ */}
        <ul className="nav justify-content-center" style={{paddingTop: '70px'}}>
          <li className="nav-item" style={{ borderRight: "2px solid lightgrey" }}>
            <a className="nav-link active" href="#">
              All
            </a>
          </li>
          <li className="nav-item" style={{ borderRight: "2px solid lightgrey" }}>
            <a className="nav-link" href="#">
              Endurance
            </a>
          </li>
          <li className="nav-item" style={{ borderRight: "2px solid lightgrey" }}>
            <a className="nav-link" href="#">
              Strength Training
            </a>
          </li>
          <li className="nav-item" style={{ borderRight: "2px solid lightgrey" }}>
            <a className="nav-link" href="#">
              Yoga
            </a>
          </li>
          <li className="nav-item" style={{ borderRight: "2px solid lightgrey" }}>
            <a className="nav-link" href="#">
              Weight Loss
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pilates
            </a>
          </li>
        </ul>
        {/* END NAV SHIZ */}

        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div className="row" 
                style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  flexDirection: 'row', 
                  justifyContent: 'center', 
                  marginLeft: '200px', 
                  marginRight: '200px', 
                  marginBottom: '300px'}}>

            {this.state.trainers.map(trainer => {
              return (
                <div key={trainer.id} 
                      className="col-sm-6" 
                      style={{
                        maxWidth: '40%'}}>

                  <div
                    className="card"
                    style={{
                      marginTop: "20px",
                      backgroundColor: "grey",
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

                      <div className="info-div" 
                          style={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'center',
                            }}>
                        <div style={{padding: '10px'}}>
                        <h5 className="card-title">{trainer.city}, {trainer.state}</h5>
                        </div>

                        <div style={{padding: '10px'}}>
                        <p className="card-text">Age: {trainer.age}</p>
                        </div>

                        <div style={{padding: '10px'}}>
                        <Rating
                          initialRating={this.state.initialRating}
                          readonly
                          emptySymbol="fa fa-star-o fa-2x"
                          fullSymbol="fa fa-star fa-2x"
                          style={{ color: "gold" }}
                        />
                        </div>

                        <div style={{padding: '10px'}}>
                        <Link
                          to={`/trainer/${trainer.id}`}
                          className="btn btn-success btn-sm"
                        >
                          View Trainer
                        </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      </React.Fragment>
    );
  }
}

export default Trainers;
