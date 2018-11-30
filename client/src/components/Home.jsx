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
          className="jumbotron jumbotron-fluid"
          style={{
            margin: "0px",
            borderBottom: "1px solid black",
            height: "300px"
          }}
        >
          <div className="container">
            <h1 className="display-4">SoloFit</h1>
            <p className="lead">
              The App that enhances the opportunity for you to maximize your
              full potential within your own boundaries.
            </p>
          </div>
        </div>
        {/* carousel */}
        <div className="row">
        <div className="col-8">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src=".../800x400?auto=yes&bg=777&fg=555&text=First slide"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>

          {/* login form  */}
          <div className="col-4">
          <form>
             
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Login</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            
            </div>
            <div className="form-group form-check">
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            
          </form>
          </div>
        
        </div>

        {/* 2nd jumbotron */}

        <div
          className="jumbotron jumbotron-fluid"
          style={{
            height: "650px",
            borderBottom: "1px solid black",
            margin: "0px"
          }}
        >
          <div className="container">
            <h1 className="display-4">GoogleMap</h1>
            <p className="lead">Yeet</p>
          </div>
        </div>

        {/* //   3rd jumbotron */}

        <div
          className="jumbotron jumbotron-fluid"
          style={{ height: "410px", borderBottom: "1px solid black", padding: '0px' }}
        >
          <div className="container">
          <div style={{padding: '20px'}}>
            <h1 className="display-4">Choose You</h1>
          </div>
            


<div className="row" style={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
            <div className="card text-white bg-dark mb-3 col-3">
  <div className="card-header">Strength</div>
  <div className="card-body">
    <h5 className="card-title">Dark card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div className="card text-white bg-dark mb-3 col-3">
  <div className="card-header">Yoga</div>
  <div className="card-body">
    <h5 className="card-title">Dark card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div className="card text-white bg-dark mb-3 col-3">
  <div className="card-header">Endurance</div>
  <div className="card-body">
    <h5 className="card-title">Dark card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
