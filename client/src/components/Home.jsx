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
        <div class="row">
        <div class="col-8">
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
          </div>

          {/* login form  */}
          <div class="col-4">
          <form>
             
            <div class="form-group">
              <label for="exampleInputEmail1">Login</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            
            </div>
            <div class="form-group form-check">
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            
          </form>
          </div>
        
        </div>

        {/* 2nd jumbotron */}

        <div
          class="jumbotron jumbotron-fluid"
          style={{
            height: "650px",
            borderBottom: "1px solid black",
            margin: "0px"
          }}
        >
          <div class="container">
            <h1 class="display-4">GoogleMap</h1>
            <p class="lead">Yeet</p>
          </div>
        </div>

        {/* //   3rd jumbotron */}

        <div
          class="jumbotron jumbotron-fluid"
          style={{ height: "410px", borderBottom: "1px solid black", padding: '0px' }}
        >
          <div class="container">
          <div style={{padding: '20px'}}>
            <h1 class="display-4">Choose You</h1>
          </div>
            


<div class="row" style={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
            <div class="card text-white bg-dark mb-3 col-3">
  <div class="card-header">Strength</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div class="card text-white bg-dark mb-3 col-3">
  <div class="card-header">Yoga</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div class="card text-white bg-dark mb-3 col-3">
  <div class="card-header">Endurance</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
