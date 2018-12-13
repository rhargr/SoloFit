import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

class AuthButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    async componentDidMount() {
        try {
            let loggedIn = await isLoggedIn();
            this.setState({ loggedIn });
        } catch (e) {
            console.log(e)
        }
    }
    
    render(){
    if (this.state.loggedIn) {
        return <Link className="btn btn-lg btn-outline-dark my-2" style={{fontFamily: 'Oswald'}} to="/logout">LOGOUT</Link>;
    } else {
        return <Link className="btn  btn-lg btn-outline-dark my-2 my-sm-0" style={{fontFamily: 'Oswald'}} to="/login">LOGIN</Link>;
    }
}
};

export default AuthButton;