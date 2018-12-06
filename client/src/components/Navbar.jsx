import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import Logo from '../images/solofit.png';
import SignUp from './SignUp';
import Trainers from './TrainerPage';


class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <React.Fragment>
            <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-warning" style={{alignItems: 'baseline'}}>
                <Link to="/" className="navbar-brand navbar-left"><img src={Logo} width="100px" style={{marginleft: '10px'}} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="col-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }} > */}

<form>
 <div className="form-row" style={{display: 'flex', alignItems: 'center'}}>
  <div className="form-group" style={{marginRight: '5px'}}>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Email"
    />
  </div>
  <div className="form-group">
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
    />

  </div>
  <div className="form-group form-check" style={{paddingLeft: '5px'}}>
  <button type="submit" className="btn btn-dark" style={{margin: '0px'}}>
    Login
 </button>
  </div>
</div>

</form>
{/* </div> */}
                <div className="navbar-right" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/Trainers" className="nav-link nav-right" > Locate Trainer </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Sign-up" className="nav-link nav-right" > 
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button">Sign Up</button>
                        </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </React.Fragment>
        );
    }riw
}

export default Navbar;