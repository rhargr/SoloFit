import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import TrainerRepository from "../repositories/trainer";
import Rating from "react-rating";
import { upperFirst } from 'lodash';
import qs from 'query-string';
import ServiceRepository from '../repositories/service';
import Nav1 from './Nav1';
import look from '../images/track.jpg';



class Trainers extends Component {
  constructor(props) {
    super(props);
    this.trainerRepo = new TrainerRepository();
    this.serviceRepo = new ServiceRepository();
   
    this.state = {
      initialRating: 3,
      trainers: [],
      services: [],
    };
  }

  componentDidMount() {
    const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });

    this.trainerRepo.all({
      serviceId: query.service
    }).then(trainers => {
      console.log(trainers);
      this.setState({
        trainers
      });

      return this.serviceRepo.all();
    })
    .then((services) => {
      this.setState({
        services
      })
    });
  }

  handleTrainerSort = (serviceId) => {
    this.trainerRepo.all({
      serviceId
    }).then((trainers) => {
      this.setState({
        trainers
      })
    });
  };

  render() {
    return (
      <React.Fragment>
        <Nav1 />

        <div style={{backgroundColor: 'aliceblue', backgroundSize: 'cover'}}>

        {/* NAV SHIZ */}
        <ul className="nav justify-content-center" style={{paddingTop: '70px'}}>
          {this.state.services.map((service) => {
            return <li onClick={() => { this.handleTrainerSort(service.id) }} className="nav-item" key={service.id} style={{ borderRight: "2px solid lightgrey" }}>
              <a className="nav-link active" href="#">
                {upperFirst(service.name)}
              </a>
            </li>;
          })}
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
                  marginBottom: '300px',
                  width: '1200px'}}>

            {this.state.trainers.map(trainer => {
              return (
                <div key={trainer.id} 
                      className="col-lg-5 col-md-5 col-sm-12" 
                      style={{minheight: '250px', maxHeight: '250px', margin: '25px', marginBottom: '50px'}}>

                  <div
                    className="card"
                    style={{
                      marginTop: "20px",
                      backgroundColor: "grey",
                      top: "50px"
                    }}
                  >
                    <h5 className="card-header" style={{backgroundColor: '#283044', color: 'white'}} >{trainer.name}</h5>
                    <div className="card-body" style={{backgroundColor: 'lightgrey'}}>
                      <div>
                        <img
                          style={{
                            borderRadius: "50%",
                            height: "200px",
                            width: "200px",
                            float: "left"
                          }}
                          className="proPic"
                          src={trainer.profilePic}
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
                        <p className="card-text">{trainer.age}</p>
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
                          className="btn btn-info btn-sm"
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
