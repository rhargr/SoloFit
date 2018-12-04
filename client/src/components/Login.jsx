import React, { Component } from 'react';
import Login from '../components/auth/login';




class NewLogin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <React.Fragment>
           <Login />
        </React.Fragment>
        );
    }
}

export default NewLogin;