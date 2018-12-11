import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn btn-lg btn-outline-dark my-2" style={{fontFamily: 'Oswald'}} to="/logout">LOGOUT</Link>;
    } else {
        return <Link className="btn  btn-lg btn-outline-dark my-2 my-sm-0" style={{fontFamily: 'Oswald'}} to="/login">LOGIN</Link>;
    }
};

export default AuthButton;