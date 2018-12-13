import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Homepage from './Home';
import GoodbyeWorld from './goodbye';
import Donate from './donate';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import SignUp from './SignUp';
import Trainers from './TrainerPage';
import Profile from './TrainerProfile';
import Schedule from './Schedule';
import Footer from './Footer';
import Navbar from './Navbar';
import SignUpTrainer from './SignUpTrainer';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Room from './Room';
import ClientRate from './ClientRate';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/room" component={Room} />
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/Sign-Up" component={SignUp} />
                        <Route
                            exact
                            path="/Sign-Up-Trainer"
                            component={SignUpTrainer}
                        />
                        <Route exact path="/Trainers" component={Trainers} />
                        <Route exact path="/login" component={Login} />
                        <Route
                            exact
                            path="/trainer/:trainerId/schedule"
                            component={Schedule}
                        />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/donate" component={Donate} />
                        <Route exact path="/goodbye" component={GoodbyeWorld} />
                        <Route exact path="/trainer/:id" component={Profile} />
                        <Route
                            exact
                            path="/ClientRate/:trainerId"
                            component={ClientRate}
                        />
                    </Switch>
                    <Room />
                    <Footer />
                </Fragment>
            </Router>
        );
    }
}

export default Navigation;
