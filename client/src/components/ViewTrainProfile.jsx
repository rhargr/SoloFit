import React, { Component } from "react";
import { render } from "react-dom";
import profilePicture from "../images/profile-picture-placholder.png";
import Rating from 'react-rating';
import ServiceRepository from '../repositories/service';
import DataInjectable from '../injectables/data';
import TrainerRepository from '../repositories/trainer';
import { upperFirst, isEmpty, isObject, flattenDeep, isNil } from 'lodash';

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.serviceRepo = new ServiceRepository();
    this.dataInj = new DataInjectable();
    this.trainerRepo = new TrainerRepository();


    this.state = {
        services: [],
        user: {
            services: []
        },
        isInEditMode: false   
    }
  }



  

  changeEditMode = () => {
      console.log('should change')
      this.setState({
          isInEditMode: true
      })
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/trainer/51`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
     
      .then(newUserApp => {
        this.setState({ ...this.state, user: newUserApp});
      })
      .catch(e => console.log(e));


      this.serviceRepo.all().then((services) => {
        const states = this.dataInj.states;
        states.unshift({
          code: '',
          name: '- Select State -',
        });
  
        this.setState({
          services,
          states,
  
        });
        console.log(this.state.user.services.id)
      });

    




  };

  handleUserChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;

    this.setState({
      user: {
        ...this.state.user,
        [inputName]: value,
      },
    });
  };

  handleAddressChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;

    this.setState({
      user: {
        ...this.state.user,
        address: {
          ...this.state.user.address,
          [inputName]: value,
        },
      },
    });
  };

  handleServiceChange = (e) => {
    const serviceId = +e.target.value;
    console.log(e.target)


    if (this.state.user.services.includes(serviceId)) {
      return;
    }

    this.setState({
      user: {
        ...this.state.user,
        services: [...this.state.user.services, serviceId],
      },
    });
  };

  submit = () => {
    
    const { user } = this.state;

    this.trainerRepo.create(user).then(({ id }) => {
      this.props.history.push(`/trainer/${id}`);
    });
  };
  

  render() {
      if (this.state.isInEditMode === false) {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
            {console.log(this.state.isInEditMode)}
            {console.log(this.state.services)}
           
           
              <div style={{ height: "1100px", width: "1000px", backgroundColor: 'grey', marginTop: '50px', marginBottom: '50px', padding: '60px' }}>
              <div style={{float: 'right'}}>
                    <button onClick={this.changeEditMode}>Edit</button>
                </div>
                <div
                  className="profile-picture-container"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "35px"
                  }}
                >
                  <div>
                    <img
                      src={profilePicture}
                      className="img-rounded"
                      alt="profile-picture"
                      style={{
                        width: "auto",
                        height: "250px",
                        border: "2px solid lightgrey",
                        borderRadius: "3px"
                      }}
                    />
                  </div>
                  <div>
                    <div style={{ paddingLeft: "10px", textAlign: "left" }}>
                      <h2
                        style={{
                          fontFamily: "Josefin Sans, sans-serif",
                          fontSize: "35px"
                        }}
                      >
                        Name: {this.state.user.name}
                      </h2>
                      <p
                        style={{
                          fontFamily: "Josefin Sans, sans-serif",
                          fontSize: "25px"
                        }}
                      >
                        Age:  {this.state.user.age}
                      </p>
                      <p
                        style={{
                          fontFamily: "Josefin Sans, sans-serif",
                          fontSize: "25px"
                        }}
                      >
                        Email:  {this.state.user.email}
                      </p>
                    </div>
                    <Rating
                                              initialRating={this.state.avgRating}
                                              emptySymbol="fa fa-star-o fa-2x"
                                              fullSymbol="fa fa-star fa-2x"
                                              style={{ color: 'gold'}}
                                              onClick={this.handleRatingClick}
                                          />
                    <div style={{ textAlign: "center" }}>
                      <br />
                    </div>
                  </div>
                </div>
                <br />
                <div id="address" style={{ textAlign: "start" }}>
                  <h2>Address</h2>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <h3>St 1: {this.state.user.street1}</h3>
                    </div>
                    <div>
                      <h3>St 2: {this.state.user.street2}</h3>
                    </div>
                    <div>
                      <h3>City: {this.state.user.city}</h3>
                    </div>
                    <div>
                      <h3>State: {this.state.user.state}</h3>
                    </div>
                    <div>
                      <h3>ZIP: {this.state.user.zip}</h3>
                    </div>
                  </div>
                </div>
      
                <div id="AboutMe">
                  <div>
                    <h2>About Me</h2>
                    <div
                      style={{
                        height: "150px",
                        width: "stretch"
                      }}
                    >
                      <h1>hello</h1>
                    </div>
                  </div>
                </div>
      
                <div id="Services">
                  <div>
                    <h2>Services: </h2>
                    {this.state.user.services.map((service) => {
                                           return <h5 key={service.id}>{upperFirst(service.name)}</h5>;
                                       })}
                  </div>
                </div>
              </div>
              {console.log(this.state.user.services)}
            </div>
          );
      } else {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
            {console.log(this.state.isInEditMode)}
           
              <div style={{ height: "1100px", width: "1000px", backgroundColor: 'grey', marginTop: '50px', marginBottom: '50px', padding: '60px' }}>
              <div style={{float: 'right'}}>
                    <button onClick={this.submit} >Submit</button>
                </div>
                <div
                  className="profile-picture-container"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "35px"
                  }}
                >
                  <div>
                    <img
                      src={profilePicture}
                      className="img-rounded"
                      alt="profile-picture"
                      style={{
                        width: "auto",
                        height: "250px",
                        border: "2px solid lightgrey",
                        borderRadius: "3px"
                      }}
                    />
                  </div>
                  <div>
                    <div style={{ paddingLeft: "10px", textAlign: "left" }}>
                      <h2
                        style={{
                          fontFamily: "Josefin Sans, sans-serif",
                          fontSize: "35px"
                        }}
                      >
                        Name: <input
                        name="name"
                        value={this.handleUserChange}
                        ></input>
                      </h2>
                      <p
                        style={{
                          fontFamily: "Josefin Sans, sans-serif",
                          fontSize: "25px"
                        }}
                      >
                        Age:  <input
                        name="age"
                        value={this.handleUserChange}
                        ></input>
                      </p>
                      <p
                        style={{
                          fontFamily: "Josefin Sans, sans-serif",
                          fontSize: "25px"
                        }}
                      >
                        Email:  <input
                        name="email"
                        value={this.handleUserChange}
                        ></input>
                      </p>
                    </div>
                    <Rating
                                              initialRating={this.state.avgRating}
                                              emptySymbol="fa fa-star-o fa-2x"
                                              fullSymbol="fa fa-star fa-2x"
                                              style={{ color: 'gold'}}
                                              onClick={this.handleRatingClick}
                                          />
                    <div style={{ textAlign: "center" }}>
                      <br />
                    </div>
                  </div>
                </div>
                <br />
                <div id="address" style={{ textAlign: "start" }}>
                  <h2>Address</h2>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <h3>St 1:</h3><input value={this.handleAddressChange}></input>
                    </div>
                    <div>
                      <h3>St 2:</h3><input  value={this.handleAddressChange}></input>
                    </div>
                    <div>
                      <h3>City:</h3><input value={this.handleAddressChange}></input>
                    </div>
                    <div>
                      <h3>State:</h3>
                      <select
                    id="inputState"
                    name="state"
                    className="form-control"
                    onChange={this.handleAddressChange}>
                    {this.state.states.map((state) => {
                      return (
                        <option
                          key={state.code}
                          value={state.code}>
                          {state.name}
                        </option>
                      );
                    })}
                  </select>
                    </div>
                    <div>
                      <h3>ZIP:</h3><input value={this.handleAddressChange}></input>
                    </div>
                  </div>
                </div>
      
                <div id="AboutMe">
                  <div>
                    <h2>About Me</h2><textarea style={{height: '100px', width: 'stretch'}} value={this.handleUserChange}></textarea>
                  </div>
                </div>
      
                <div id="Services">
                  <div>
                    <h2>Services</h2>

                  </div>
                  <div className="row">
                  {this.state.services.map((service) => {
                    return (
                      <div
                        className="col-md-4 col-sm-6"
                        key={service.id}>
                        <input
                          id="inputCheck"
                          type="checkbox"
                          name="checkbox"
                          value={service.id}
                          onChange={
                            this.handleServiceChange
                          }
                        />
                        <span>
                          {upperFirst(service.name)}
                        </span>
                      </div>
                    );
                  })}
                </div>
                </div>
              </div>
           
            </div>
          ) 
              
          
      }
    
  }
}

export default ViewProfile;
