import React, { Component } from "react";
import { render } from "react-dom";
import caro2 from '../images/caro2.png';
import jumbo1 from '../images/jumbo.jpg';


class Trainers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainers: [
        {
          name: "Rob",
          location: "Birmingham",
          cost: "35/hr",
          img: caro2
        },
        {
          name: "Drayton",
          location: "Hoover",
          cost: "30/hr",
          img: caro2
        },
        {
          name: "Ashley",
          location: "Birmingham",
          cost: "50/hr",
          img: caro2
        },
        {
          name: "Ray",
          location: "Birmingham",
          cost: "100/hr",
          img: caro2
        }
      ]
    };
  }

  render() {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'space-around', backgroundImage: `url(${jumbo1})`}}>
            <div className="row">
                {this.state.trainers.map(train => {
                    return (
                        <div className="col-sm-6">
                            <div className="card" style={{marginTop: '20px', backgroundColor: 'lightGray', top: '50px'}}>
                                <h5 className="card-header">{train.name}</h5>
                                <div className="card-body">
                                    <div>
                                        <img style={{ borderRadius: '50%', height: '200px', width: '200px', float: 'left'}}
                                            className="proPic"
                                            src={train.img}
                                            alt="Profile Picture"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="card-title">{train.location}</h5>
                                        <p className="card-text">
                                            {train.cost}
                                        </p>
                                        <a href="#" className="btn btn-primary">
                                            View Trainer
                                        </a>
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
