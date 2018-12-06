import React, { Component } from 'react';
import { render } from 'react-dom';
import * as classService from '../services/classes';
import BGPic from "../images/BG.png"
import DataInjectable from '../injectables/data';
import ServiceRepository from '../repositories/service';

class New extends Component {
    
    constructor(props) {
        super(props);
        this.serviceRepo =new ServiceRepository();
        this.state = {
          states: [],
          user: {
            name: "",
            age: "",
            email: "",
            hash: "",
            address: {
              street1: "",
              street2: "",
              city: "",
              state: "",
              zip: ""
            },
            service: {
              name: ""
            }
          },
          services: []
          
        };

        this.dataInj = new DataInjectable();
    }

    componentDidMount() {
      this.setState({ states: this.dataInj.states });
      this.serviceRepo.all()
      .then(services => {
        this.setState({ services })
      })
    }

    handleChange1 = event => {
      console.log(this.state.user)
      this.setState({ 
        ...this.state, 
        user: {
          ...this.state.user,
         name: event.target.value }
       });
    };

    handleChange2 = event => {
      this.setState({ 
        ...this.state, 
        user: {
          ...this.state.user,
         age: event.target.value }
       });
    };


  handleChange3 = event => {
    this.setState({ 
      ...this.state, 
      user: {
        ...this.state.user,
       email: event.target.value }
     });
  };

  handleChange4 = event => {
    this.setState({ 
      ...this.state, 
      user: {
        ...this.state.user,
       hash: event.target.value }
     });
  };

  handleChange5 = event => {
    this.setState({ 
      ...this.state,
      user: {
          ...this.state.user,
        address: {
          ...this.state.user.address,
         street1: event.target.value }
      } 
      
     });
  };

  handleChange6 = event => {
    this.setState({ 
      ...this.state,
      user: {
          ...this.state.user,
        address: {
          ...this.state.user.address,
         street2: event.target.value }
      } 
      
     });
  };

  handleChange7 = event => {
    this.setState({ 
      ...this.state,
      user: {
          ...this.state.user,
        address: {
          ...this.state.user.address,
         city: event.target.value }
      } 
      
     });
  };

  handleChange8 = event => {
    this.setState({ 
      ...this.state,
      user: {
          ...this.state.user,
        address: {
          ...this.state.user.address,
         state: event.target.value }
      } 
      
     });
  };

  handleChange9 = event => {
    this.setState({ 
      ...this.state,
      user: {
          ...this.state.user,
        address: {
          ...this.state.user.address,
         zip: event.target.value }
      } 
      
     });
  };

  handleChange10 = event => {
    this.setState({ 
      ...this.state,
      user: {
          ...this.state.user,
        service: {
          ...this.state.user.service,
         name: event.target.value }
      } 
      
     });
  };

  submit = () => {
    let  newUser = {
      name: this.state.user.name,
      age: this.state.user.age,
      email: this.state.user.email,
      hash: this.state.user.hash,
      address: {
        street1: this.state.user.address.street1,
              street2: this.state.user.address.street2,
              city: this.state.user.address.city,
              state: this.state.user.address.state,
              zip: this.state.user.address.zip
      },
      servie: {
        name: this.state.user.service.name
      }
    }

    fetch(`http://localhost:3000/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(newUserApp => {
        this.setState({ newUserApp });
      })
      .catch(e => console.log(e));
  }



  


    render() {
        return (
            <div style={{minHeight: '100vh', backgroundImage: `url(${BGPic})`, backgroundSize: "cover"}}>
            {console.log(this.state.services)}
            <div style={{display: 'flex', flexDirection: 'column', position: 'relative', top: '100px', color: 'white'}}>
                <h3>"Combine your natural ability with a mission to help people and you will have a rich, fulfilling life"</h3>
                <h4>-Bryan Krahn, Physique Coach</h4>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
          
            <div style={{display: 'flex', justifyContent: 'center', position: 'relative', top: '200px', flexDirection: 'column', maxWidth: '900px', top: '125px'}}>
            <div>
            <ul className="nav nav-tabs">
                 <li className="nav-item">
                    <a className="nav-link" href="/Sign-Up">Client</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/Sign-Up-Trainer">Trainer</a>
                </li>
            </ul>
            </div>
            <form style={{ maxWidth: '900px', padding: '25px', borderRadius: '3px', backgroundColor: 'lightGray', position: 'relative'}}>
            <h1>Trainer</h1>
            <div className="form-row">
            <div className="form-group col-md-6">
    
    <label htmlFor="inputEmail4"></label>
    <input 
    type="text" 
    className="form-control" 
    id="inputName"
    placeholder="Name"
    value={this.state.user.name}
    onChange={this.handleChange1}
    />
  </div>


  <div className="form-group col-md-6">
    
    <label htmlFor="inputEmail4"></label>
    <input 
    type="text" 
    className="form-control" 
    id="inputAge"
    placeholder="Age"
    value={this.state.user.age}
    onChange={this.handleChange2}
    />
  </div>
  </div>
  <div className="form-row">
  
    <div className="form-group col-md-6">
    
      <label htmlFor="inputEmail4"></label>
      <input 
      type="email" 
      className="form-control" 
      id="inputEmail4"
      placeholder="Email"
      value={this.state.user.email}
      onChange={this.handleChange3}
      />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4"></label>
      <input 
      type="text" 
      className="form-control" 
      id="inputPassword4" 
      placeholder="Password"
      value={this.state.user.hash}
      onChange={this.handleChange4}
       />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress"></label>
    <input 
    type="text" 
    className="form-control" 
    id="inputAddress1" 
    placeholder="Street 1" 
    value={this.state.user.address.street1}
    onChange={this.handleChange5}
    />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress"></label>
    <input 
    type="text" 
    className="form-control" 
    id="inputAddress2" 
    placeholder="Street 2"
    value={this.state.user.address.street2}
    onChange={this.handleChange6} 
    />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity"></label>
      <input 
      type="text" 
      className="form-control" 
      id="inputCity" 
      placeholder="City"
      value={this.state.user.address.city}
      onChange={this.handleChange7}

       />
    </div>
    <div className="form-group col-md-4">
                  <label htmlFor="inputState"></label>
                  <select id="inputState" className="form-control">
                      {this.state.states.map((state) => {
                        return <option key={state.code} onChange={this.handleChange8} value={state.code}>{state.name}</option>
                      })}
                  </select>
                </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip"></label>
      <input 
      type="text" 
      className="form-control" 
      id="inputZip" 
      placeholder="Zip"
      value={this.state.user.address.zip}
      onChange={this.handleChange9}
       />
    </div>
  </div>
  <div style={{display: 'flex', justifyContent: 'center', maxWidth: '100%' }}>
  <div className="form-group col-md-6" style={{flex: '1', maxWidth:'100%', padding: '0px'}}>
      <label htmlFor="inputCity"></label>
      <textarea 
      type="text-area" 
      className="form-control" 
      id="input" 
      placeholder="About Me"
      />
  </div>

  <div className="form-group">
  </div>
  </div>
<div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}>
  <div style={{display: 'flex', justifyContent: 'space-around'}}>
    {this.state.services.map(service => {
      return (
        <div style={{marginLeft: '6px', marginRight: '6px'}}>
        <input type="checkbox" value={this.state.user.service} onChange={this.handleChange10}></input>{service.name}
        </div>
      )
    })}
  </div>
</div>

  

  <button type="submit" onChange={this.submit} className="btn btn-primary">Create Account</button>
</form>
</div>
</div>
</div>

        )
    }
}

export default New;