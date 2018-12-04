import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import caro2 from '../images/caro2.png';
import jumbo1 from '../images/jumbo.jpg';


class Trainers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainers: []
    };
    
  }

  componentDidMount() {
    fetch('/api/trainer')
        .then((res) => res.json())
        .then((trainers) => {
            this.setState({
                trainers,
            });
        });
};



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
                                            src={caro2}
                                            alt="Profile Picture"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="card-title">{train.location}</h5>
                                        <p className="card-text">
                                            {train.age}
                                        </p>
                                        <Link to={`/trainer/${train.id}`} className="btn btn-secondary btn-sm">View Trainer</Link>
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
