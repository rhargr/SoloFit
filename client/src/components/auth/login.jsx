import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';
import Nav2 from '../Nav2';
import jog from '../../images/jogger.jpg'
import { relative } from 'path';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true,
        };
    }

    async componentDidMount() {
        try {
            let loggedIn = await userService.checkLogin();

            if (loggedIn) {
                this.setState({
                    redirectToReferrer: true,
                    checkingLogin: false,
                });
            } else {
                this.setState({ checkingLogin: false });
            }
        } catch (e) {
            this.setState({ checkingLogin: false });
        }
    }

    async login(e) {
        e.preventDefault();
        try {
            await userService.login(this.state.email, this.state.password);
            this.setState({ redirectToReferrer: true });
        } catch (e) {
            if (e.message) {
                this.setState({ feedbackMessage: err.message });
            }
        }
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
        const { from } = this.props.location.state || {
            from: { pathname: '/' },
        };
        const { redirectToReferrer, checkingLogin } = this.state;

        if (checkingLogin) {
            return <IndeterminateProgress message="Checking Login Status..." />;
        }
        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <Fragment>
                <Nav2 />
                <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'flex-end', backgroundImage: `url(${jog})`, backgroundSize: 'cover'}}>
               


<form style={{position: 'relative', top: '225px', height: '250px', width: '600px', padding: '60px', opacity: '.7'}} onSubmit={(e) => this.login(e)}>
    <div className="form-group">

        <input
            id="email"
            className="form-control"
            type="email"
            placeholder="Email"
            onChange={(e) =>
                this.handleEmailChange(e.target.value)
            }
            required
        />
    </div>
    <div className="form-group">
    
        <input
            id="password"
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={(e) =>
                this.handlePasswordChange(e.target.value)
            }
            required
        />
    </div>
    {this.state.feedbackMessage ? (
        <p>{this.state.feedbackMessage}</p>
    ) : null}
    <input
        type="submit"
        value="Login"
        className="btn btn-info"
    />
</form>
</div>

               
               
            </Fragment>
        );
    }
}

export default Login;
