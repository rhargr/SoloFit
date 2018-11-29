import React, { Component } from "react";
import { render } from "react-dom";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        // jumbotron
      <div>
        <div
          class="jumbotron jumbotron-fluid"
          style={{
            margin: "0px",
            borderBottom: "1px solid black",
            height: "300px"
          }}
        >
          <div class="container">
            <h1 class="display-4">SoloFit</h1>
            <p class="lead">
              The App that enhances the opportunity for you to maximize your
              full potential within your own boundaries.
            </p>
          </div>
        </div>
          {/* carousel */}
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src=".../800x400?auto=yes&bg=777&fg=555&text=First slide"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>

        {/* 2nd jumbotron */}

        <div
          class="jumbotron jumbotron-fluid"
          style={{ height: "650px", borderBottom: "1px solid black" }}
        >
          <div class="container">
            <h1 class="display-4">GoogleMap</h1>
            <p class="lead">Yeet</p>
          </div>
        </div>
      

        {/* //   3rd jumbotron */}

    <div
          class="jumbotron jumbotron-fluid"
          style={{ height: "300px", borderBottom: "1px solid black" }}
        >
          <div class="container">
            <h1 class="display-4">Choose You</h1>
            <p class="lead">Yeet</p>
          </div>
        </div>
    


    
    </div>


    );
  }
}

export default Homepage;
