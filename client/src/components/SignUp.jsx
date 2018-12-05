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
    };
    this.dataInj = new DataInjectable();
  }

  componentDidMount() {
    this.setState({ states: this.dataInj.states });
  }

  render() {
    return (
      <div style={{ minHeight: '100vh', backgroundImage: `url(${BGPic})`, backgroundSize: "cover" }}>
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', top: '100px', color: 'white' }}>
          <h3>"Motivation is what gets you started. Habit is what keeps you going."</h3>
          <h4>-Jim Ryan, Olympic Athelete</h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '200px', flexDirection: 'column', maxWidth: '800px' }}>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="/Sign-Up">Client</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Sign-Up-Trainer">Trainer</a>
              </li>
            </ul>
            <form style={{ maxWidth: '900px', padding: '25px', borderRadius: '3px', backgroundColor: 'lightGray' }}>
              <h1>Client</h1>
              <div className="form-row">

                <div className="form-group col-md-6">

                  <label htmlFor="inputEmail4"></label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4"></label>
                  <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress"></label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity"></label>
                  <input type="text" className="form-control" id="inputCity" placeholder="City" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState"></label>
                  <select id="inputState" className="form-control">
                      {this.state.states.map((state) => {
                        return <option key={state.code} value={state.code}>{state.name}</option>
                      })}
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip"></label>
                  <input type="text" className="form-control" id="inputZip" placeholder="Zip" />
                </div>
              </div>
              <div className="form-group">
              </div>
              <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
          </div>
        </div>
      </div>



    )
  }
}

export default SignUp;