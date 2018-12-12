import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from './Navbar';

import jumbo from "../images/Girl.jpg";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{backgroundColor: "#EBF5EE" }}>

        <div
          className="jumbotron jumbotron-fluid"
          style={{
            margin: "0px",
            height: "1100px",
            backgroundImage: `url(${jumbo})`,
            padding: "0px",
            borderBottom: '50px solid #FFA400'
          }}
        >
        <Navbar />
        
          <div
            className="container"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "flex-start",
              position: "absolute",
              left: "25px",
              top: "130px"
            }}
          >
          </div>
        </div>

        <div class="jumbotron jumbotron-fluid" style={{backgroundColor: "#EBF5EE"}}>
          <div class="container">
            <div
            
            >
              <div>
                <h1
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "60px",
                    color: "#283044"
                  }}
                >
                  "We enhance the opportunity for you 
                </h1>
              </div>
              <div>
                <h1
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "60px",
                    color: "#283044"
                  }}
                >
                  to maximize your full potential 
                </h1>
              </div>
              <div>
                <h1
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "60px",
                    color: "#283044"
                  }}
                >
                 within your own boundaries."
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          className="jumbotron jumbotron-fluid"
          style={{
            height: "410px",
            padding: "0px",
            marginBottom: "0",
            backgroundColor: "#EBF5EE"
          }}
        >
          <div className="container" style={{ marginBottom: "50px" }}>
            <div style={{ padding: "20px", color: "white" }}>
              <h1
                className="display-4"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "60px",
                  color: "#283044",
                  marginBottom: "30px",
                  marginTop: "30px"
                }}
              >
               Choose Your Fit
              </h1>
            </div>

            <div
              className="row"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "center"
              }}
            >
              <div
                className="card text-white mb-3 col-3"
                style={{ marginLeft: "15px", marginRight: "15px", backgroundColor: "#283044" }}
              >
                <div className="card-header">
                 Strength
                </div>
                <div className="card-body">
                  <p className="card-text">
                    A method of improving muscular strength by gradually
                    increasing the ability to resist force through the use of
                    free weights and machines.
                  </p>
                </div>
              </div>

              <div
                className="card text-white mb-3 col-3"
                style={{ marginLeft: "10px", marginRight: "10px", backgroundColor: "#283044"  }}
              >
                <div className="card-header">
                 Yoga
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Combines physical exercises, mental meditation, and
                    breathing techniques to strengthen the muscles and relieve
                    stress.
                  </p>
                </div>
              </div>

              <div
                className="card text-white mb-3 col-3"
                style={{ marginLeft: "10px", marginRight: "10px", backgroundColor: "#283044" }}
              >
                <div className="card-header">
                 Endurance
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Training for athletic events requiring prolonged effort,
                    such as running a marathon, swimming a long distance, or
                    climbing mountains.
                  </p>
                </div>
              </div>
              <div
                className="card text-white mb-3 col-3"
                style={{ marginLeft: "10px", marginRight: "10px", backgroundColor: "#283044" }}
              >
                <div className="card-header">
                 Pilates
                </div>
                <div className="card-body">
                  <p className="card-text">
                    A system of exercises using special apparatus, designed to
                    improve physical strength, flexibility, and posture, and
                    enhance mental awareness.
                  </p>
                </div>
              </div>
              <div
                className="card text-white mb-3 col-3"
                style={{ marginLeft: "10px", marginRight: "10px", backgroundColor: "#283044" }}
              >
                <div className="card-header">
                 Weight-Loss
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Combines diet along with exercise to burn calories and
                    improve overall health as well as lose body mass.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
