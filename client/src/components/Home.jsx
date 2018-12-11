import React, { Component } from "react";
import { render } from "react-dom";

import jumbo from "../images/yogaLady.jpg";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   // The location of Uluru
  //   var bham = { lat: 33.520682, lng: -86.802433 };
  //   // The map, centered at Uluru
  //   var map = new google.maps.Map(
  //     document.getElementById('map'), { zoom: 10, center: bham });

  //     var marker1 = new google.maps.Marker({
  //       position: {lat: 33.366653, lng: -86.768528},
  //       map: map,
  //       title: 'Personal Trainer 1'
  //     });

  //     var marker2 = new google.maps.Marker({
  //       position: {lat: 33.389933, lng: -86.766959},
  //       map: map,
  //       title: 'Personal Trainer 2'
  //     });

  //     var marker3 = new google.maps.Marker({
  //       position: {lat: 33.490923, lng: -86.808188},
  //       map: map,
  //       title: 'Personal Trainer 3'
  //     });
  // }

  render() {
    return (
      // jumbotron
      <div>
        <div
          className="jumbotron jumbotron-fluid"
          style={{
            margin: "0px",
            height: "800px",
            backgroundImage: `url(${jumbo})`
          }}
        >
          <div
            className="container"
            style={{
              color: "white",
              display: "flex",
              justifyContent: "flex-start",
              position: "absolute",
              left: "25px",
              top: "130px"
            }}
          >
            <h1
              className="display-4"
              style={{
                fontFamily: "Helvetica",
                fontSize: "175px",
                textShadow: "2px 2px grey",
                color: "white",
                fontWeight: "bold",
                right: "400px"
              }}
            >
              SoloFit
            </h1>
          </div>
          <div style={{ position: "absolute", right: "45px", top: "250px" }}>
            <div>
              <h1
                className="lead"
                style={{
                  fontFamily: "Josefin Sans, sans-serif",
                  fontSize: "55px",
                  color: "black"
                }}
              >
                We enhance the opportunity for you
              </h1>
            </div>
            <div>
              <h1
                style={{
                  fontFamily: "Josefin Sans, sans-serif",
                  fontSize: "55px"
                }}
              >
                to maximize your full potential
              </h1>
            </div>
            <div>
              <h1
                style={{
                  fontFamily: "Josefin Sans, sans-serif",
                  fontSize: "55px"
                }}
              >
                within your own boundaries
              </h1>
            </div>
          </div>
        </div>
        <div
          className="jumbotron jumbotron-fluid"
          style={{
            height: "410px",
            padding: "0px",
            marginBottom: "0",
            backgroundColor: "white"
          }}
        >
          <div className="container" style={{ marginBottom: "50px" }}>
            <div style={{ padding: "20px", color: "white" }}>
              <h1
                className="display-4"
                style={{
                  fontFamily: "Josefin Sans, sans-serif",
                  fontSize: "60px",
                  textShadow: "2px 2px grey",
                  color: "black",
                  marginBottom: "30px",
                  marginTop: "30px"
                }}
              >
                <strong>Choose Your Fit</strong>
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
                className="card text-white bg-dark mb-3 col-3"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <div className="card-header">
                  <strong>Strength</strong>
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
                className="card text-white bg-dark mb-3 col-3"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                <div className="card-header">
                  <strong>Yoga</strong>
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
                className="card text-white bg-dark mb-3 col-3"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                <div className="card-header">
                  <strong>Endurance</strong>
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
                className="card text-white bg-dark mb-3 col-3"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                <div className="card-header">
                  <strong>Pilates</strong>
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
                className="card text-white bg-dark mb-3 col-3"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                <div className="card-header">
                  <strong>Weight-Loss</strong>
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
