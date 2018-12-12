import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./Home";
import BGPic from "../images/BG.png";
import DataInjectable from "../injectables/data";
import Nav1 from "./Nav1";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
      user: {
        name: "",
        age: "",
        email: "",
        hash: ""
      },
      error: ''
    };
    this.dataInj = new DataInjectable();
  }

  componentDidMount() {
    this.setState({ states: this.dataInj.states });
  }

  isValid = () => {
    let validateName = document.getElementById("inputName");
    let validateAge = document.getElementById("inputAge");
    let validateEmail = document.getElementById("inputEmail4");
    let validateHash = document.getElementById("inputPassword4");
    console.log(validateName);
    if (!validateName.value || !validateName.value.trim()) {
      this.setState({
        error: 'Name is required'
      })
      return false;
    } else if (!validateAge.value || !validateAge.value.trim()) {
      this.setState({
        error: 'Age is required'
      })
      return false;
    } else if (!validateEmail.value || !validateEmail.value.trim()) {
      this.setState({
        error: 'A valid email is required'
      })
      return false;
    } else if (!validateHash.value || !validateHash.value.trim()) {
      this.setState({
        error: 'Password must contain 8 characters'
      })
      return false;
    } else return true;
  };

  handleChange1 = event => {
    console.log(this.state.user);
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        name: event.target.value
      }
    });
  };

  handleChange2 = event => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        age: event.target.value
      }
    });
  };

  handleChange3 = event => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        email: event.target.value
      }
    });
  };

  handleChange4 = event => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        hash: event.target.value
      }
    });
  };

  submit = e => {
    
    

    e.preventDefault();
    if (!this.isValid()) {
      return;
    }
    console.log("it was valid");

    let newUser = {
      name: this.state.user.name,
      age: this.state.user.age,
      email: this.state.user.email,
      hash: this.state.user.hash
    };

    fetch(`http://localhost:3000/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(newUserApp => {
        this.setState({ newUserApp, user: {
          name: "",
          age: "",
          email: "",
          hash: ""
        } });
      })
      .catch(e => console.log(e));

  };

  render() {
    return (
     
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${BGPic})`,
          backgroundSize: "cover"
        }}
      >
      <Nav1 />
      
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            top: "100px",
            color: "white"
          }}
        >
          <h3>
            "Motivation is what gets you started. Habit is what keeps you
            going."
          </h3>
          <h4>-Jim Ryan, Olympic Athelete</h4>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              top: "200px",
              flexDirection: "column",
              maxWidth: "800px"
            }}
          >
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="/Sign-Up">
                  Client
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Sign-Up-Trainer">
                  Trainer
                </a>
              </li>
            </ul>
            <form id="form"
              style={{
                maxWidth: "900px",
                padding: "25px",
                borderRadius: "3px",
                backgroundColor: "lightGray"
              }}
            >
              <div className="form-row">
                <div className="form-group col-md-6" id="name">
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Name"
                    value={this.state.user.name}
                    onChange={this.handleChange1}
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAge"
                    placeholder="Age"
                    value={this.state.user.age}
                    onChange={this.handleChange2}
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    value={this.state.user.email}
                    onChange={this.handleChange3}
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                    value={this.state.user.hash}
                    onChange={this.handleChange4}
                  />
                </div>
              </div>
              <div className="form-group" />
              <button
                type="submit"
                onClick={this.submit}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
            {
        this.state.error && (
          <div class="alert alert-primary" role="alert">
         {this.state.error}
        </div>
        )
      }
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
