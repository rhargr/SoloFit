import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Logo from '../images/solofit.png';
import SignUp from './SignUp';
import Trainers from './TrainerPage';
import AuthButton from './auth/authButton';

class Nav1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <header className="navbar navbar-expand flex-column flex-md-row bd-navbar" style={{ alignItems: 'baseline', position: 'relative', top: '0px', backgroundColor: '#FFA400'}}>
                    <Link to="/" className="navbar-brand navbar-left"><img src={Logo} width="100px" style={{ marginleft: '10px', height: '70px', width: 'auto'}} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="col-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }} > */}
                    <AuthButton />
                    {/* </div> */}
                    <div className="navbar-right" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Trainers" className="nav-link nav-right" style={{ color: 'black', fontFamily: 'Oswald' }} > Locate Trainer </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Sign-up" className="nav-link nav-right" >
                                    <button className="btn btn-outline-dark my-2 my-sm-0" style={{fontFamily: 'Oswald'}} type="button">Sign Up</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Nav1;