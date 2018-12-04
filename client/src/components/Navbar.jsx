import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import Logo from '../images/solofit.png';
import SignUp from './SignUp';
import Trainers from './TrainerPage';
import AuthButton from './auth/authButton';



class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <React.Fragment>
            <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-warning">
                <Link to="/" className="navbar-brand navbar-left"><img src={Logo} width="100px" style={{marginleft: '10px'}} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-right" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/Trainers" className="nav-link nav-right" > Locate Trainer </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Sign-up" className="nav-link nav-right" > 
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button">Sign Up</button>
                        </Link>
                        <AuthButton />
                  
                        </li>
                    </ul>
                </div>
            </header>
        </React.Fragment>
        );
    }riw
}

export default Navbar;