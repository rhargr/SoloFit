import React, { Component } from "react";
import { render } from "react-dom";

class Trainers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainers: [
        {
          name: "Rob",
          location: "Birmingham",
          cost: "35/hr"
        },
        {
          name: "Drayton",
          location: "Hoover",
          cost: "30/hr"
        },
        {
          name: "Ashley",
          location: "Birmingham",
          cost: "50/hr"
        },
        {
          name: "Ray",
          location: "Birmingham",
          cost: "100/hr"
        }
      ]
    };
  }

  render() {
      return this.state.trainers.map(train => {
        return (
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', maxWidth: '100%'}}>
                <div className="card">
                    <h5 className="card-header">{train.name}</h5>
                    <div className="card-body">
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
            
          );
      })
    
  }
}

export default Trainers;
