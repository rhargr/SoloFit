import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Homepage from "./Home";
import GoodbyeWorld from "./goodbye";
import Donate from "./donate";

import PrivateRoute from "./auth/privateRoute";
import Login from "./auth/login";
import Logout from "./auth/logout";
import AuthButton from "./auth/authButton";

import SignUp from "./SignUp";
import Trainers from "./TrainerPage";
import Profile from "./TrainerProfile";
import Schedule from "./Schedule";
import Footer from "./Footer";
import Navbar from "./Navbar";

import SignUpTrainer from "./SignUpTrainer";





class Navigation extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Sign-Up" component={SignUp} />
            <Route exact path="/Sign-Up-Trainer" component={SignUpTrainer} />
            <Route exact path="/Trainers" component={Trainers} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Scheduling" component={Schedule} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/goodbye" component={GoodbyeWorld} />
          </Switch>
          <AuthButton />
          <Link to="/goodbye">Goodbye</Link>
          <Link to="/Trainers">check out trainers</Link>
          <Link to="/Profile">single Trainer</Link>
          <Link to="/Scheduling">Calendar</Link>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default Navigation;
