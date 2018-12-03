import React, { Component } from "react";
import { render } from "react-dom";
import jumbo1 from '../images/jumbo.jpg';
import last1 from '../images/last1.png';
import caro2 from '../images/caro2.png';
import caro3 from '../images/caro3.png';
import maybe from '../images/maybe.png';


 class Homepage extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  // The location of Uluru
  var uluru = {lat: 33.520682, lng: -86.802433};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: uluru});
  }

  render() {
    return (
      // jumbotron
      <div>
        <div className="jumbotron jumbotron-fluid"
          style={{
            margin: "0px",
            borderBottom: "1px solid black",
            height: "300px",
            backgroundImage: `url(${jumbo1})`
            
          }}
        >
          <div className="container" style={{color: 'white'}}>
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
            <div className="carousel-inner" style={{maxHeight: '300px', minHeight: '300px'}}>
              <div className="carousel-item active" >
                <img
                 className="d-block w-100"
                  src={caro2}
                  alt="First slide" />  
              </div>
              <div className="carousel-item">
                <img
                 className="d-block w-100"
                  src={caro3}

                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img

                 className="d-block w-100"
                  src={maybe}

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

          <div className="col-4" style={{display: 'flex', justifyContent: 'space-around', marginTop: '30px'}} >
        
          <form>
             
             <div className="form-group" >
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

          <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
            <div id="map" style={{height: '500px', width: '1200px'}}></div>

          </div>
        </div>

        {/* //   3rd jumbotron */}

        <div

         className="jumbotron jumbotron-fluid"
          style={{ height: "410px", borderBottom: "1px solid black", padding: '0px', marginBottom: '0',  backgroundImage: `url(${jumbo1})` }}
        >
          <div className="container" style={{}}>
          <div style={{padding: '20px', color: 'white'}}>
            <h1 className="display-4">Choose Your Fit</h1>
          </div>
            


<div className="row" style={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>

            <div className="card text-white bg-success mb-3 col-3">
  <div className="card-header">Strength</div>
  <div className="card-body">
    <p className="card-text">a method of improving muscular strength by gradually increasing the ability to resist force through the use of free weights and machines.</p>
  </div>
</div>


<div className="card text-white bg-success mb-3 col-3">
  <div className="card-header">Yoga</div>
  <div className="card-body">
    <p className="card-text">Yoga combines physical exercises, mental meditation, and breathing techniques to strengthen the muscles and relieve stress.</p>

  </div>
</div>

<div className="card text-white bg-success mb-3 col-3">
  <div className="card-header">Endurance</div>
  <div className="card-body">
    <p className="card-text">training for athletic events requiring prolonged effort, such as running a marathon, swimming a long distance, or climbing mountains.</p>

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
