import React, { Component } from 'react';
import { render } from 'react-dom';
import Homepage from './Home';
import BGPic from "../images/BG.png"
import DataInjectable from '../injectables/data';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      states: [],
      user: {
        name: "",
        age: "",
        email: "",
        hash: ""
      }
    };
    this.dataInj = new DataInjectable();
  }

  componentDidMount() {
    this.setState({ states: this.dataInj.states });
  };

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


  submit = () => {
    let  newUser = {
      name: this.state.user.name,
      age: this.state.user.age,
      email: this.state.user.email,
      hash: this.state.user.hash
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
      <div style={{ minHeight: '100vh', backgroundImage: `url(${BGPic})`, backgroundSize: "cover" }}>
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', top: '100px', color: 'white' }}>
          <h3>"Motivation is what gets you started. Habit is what keeps you going."</h3>
          <h4>-Jim Ryan, Olympic Athelete</h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '200px', flexDirection: 'column', maxWidth: '800px', opacity: '0.8' }}>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="/Sign-Up">Client</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Sign-Up-Trainer">Trainer</a>
              </li>
            </ul>
            <form style={{ maxWidth: '900px', padding: '25px', borderRadius: '3px', backgroundColor: 'lightGray' }}>
            <div className="form-row">
    <div className="form-group col-md-6">
   
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
      <input 
      type="text" 
      className="form-control" 
      id="inputAge" 
      placeholder="Age"
      value={this.state.user.age}
      onChange={this.handleChange2} 
      />
    </div>
    <div className="form-group col-md-6">
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
      <input 
      type="password" 
      className="form-control" 
      id="inputPassword4" 
      placeholder="Password"
      value={this.state.user.hash}
      onChange={this.handleChange4} 
      />
    </div>
  </div>
  <div className="form-group">
  </div>
  <button type="submit" onClick={this.submit} className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
       
      </div>




    )
  }
}

export default SignUp;