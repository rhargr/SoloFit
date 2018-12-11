import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import jumbo1 from '../images/jumbo.jpg';
import caro10 from '../images/caro10.jpg';
import caro2 from '../images/caro2.png';
import caro3 from '../images/caro3.png';
import maybe from '../images/maybe.png';
import newCaro from '../images/newCaro1.jpg';
import quote3 from '../images/newPic.png';
import quote from '../images/thing.png'
import jumbo from '../images/fuck.jpg';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // The location of Uluru
    var bham = { lat: 33.520682, lng: -86.802433 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 10, center: bham });

      var marker1 = new google.maps.Marker({
        position: {lat: 33.366653, lng: -86.768528},
        map: map,
        title: 'Personal Trainer 1'
      });

      var marker2 = new google.maps.Marker({
        position: {lat: 33.389933, lng: -86.766959},
        map: map,
        title: 'Personal Trainer 2'
      });

      var marker3 = new google.maps.Marker({
        position: {lat: 33.490923, lng: -86.808188},
        map: map, 
        title: 'Personal Trainer 3'
      });
  }

  render() {
    return (
      // jumbotron
      <div>
        <div className="jumbotron jumbotron-fluid"
          style={{
            margin: "0px",
            height: "700px",
            backgroundImage: `url(${jumbo})`
            
          }}
        >
          <div className="container" style={{ color: 'white', display: 'flex', justifyContent: 'flex-start', position: 'absolute', left: '25px', top: '130px'}}>
            <h1 className="display-4" style={{fontFamily: 'Helvetica', fontSize: '175px', textShadow: '2px 2px grey', color: 'white', fontWeight: 'bold', right: '400px'}}>SoloFit</h1>
            </div>
           <div style={{position: 'absolute', right: '45px', top: '250px'}}>
           <div>
            <h1 className="lead" style={{fontFamily: 'Josefin Sans, sans-serif',fontSize: '55px', color: 'white'}}>
              We enhance the opportunity for you
              </h1>
              </div>
              <div>
              <h1 style={{fontFamily: 'Josefin Sans, sans-serif',fontSize: '55px', }}>
              to maximize your full potential 
              </h1>
              </div>
              <div>
              <h1 style={{fontFamily: 'Josefin Sans, sans-serif',fontSize: '55px', }}>
              within your own boundaries
            </h1>
          </div>

           </div>
            
            
            
        </div>
        {/* carousel */}
        {/* <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleControls"

              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" style={{ maxHeight: '500px', minHeight: '500px' }}>
                <div className="carousel-item active" >
                  <img
                    className="d-block w-100"
                    src={quote}
                    alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={quote3}

                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img

                    className="d-block w-100"
                    src={caro10}

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

        

         
        </div> */}


        <div

className="jumbotron jumbotron-fluid"
style={{ height: "410px", padding: '0px', marginBottom: '0', backgroundColor: 'white' }}
>
<div className="container" style={{marginBottom: '50px'}}>
  <div style={{ padding: '20px', color: 'white' }}>
    <h1 className="display-4" style={{fontFamily: 'Josefin Sans, sans-serif', fontSize: '60px', textShadow: '2px 2px grey' ,color: 'black', marginBottom: '30px', marginTop: '30px'}}><strong>Choose Your Fit</strong></h1>
  </div>



  <div className="row" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center'}}>

    <div className="card text-white bg-dark mb-3 col-3" style={{marginLeft: '15px', marginRight: '15px'}}>
      <div className="card-header"><strong>Strength</strong></div>
      <div className="card-body">
        <p className="card-text">A method of improving muscular strength by gradually increasing the ability to resist force through the use of free weights and machines.</p>
      </div>
    </div>


    <div className="card text-white bg-dark mb-3 col-3" style={{marginLeft: '10px', marginRight: '10px'}}>
      <div className="card-header"><strong>Yoga</strong></div>
      <div className="card-body">
        <p className="card-text">Combines physical exercises, mental meditation, and breathing techniques to strengthen the muscles and relieve stress.</p>

      </div>
    </div>

    <div className="card text-white bg-dark mb-3 col-3" style={{marginLeft: '10px', marginRight: '10px'}}>
      <div className="card-header"><strong>Endurance</strong></div>
      <div className="card-body">
        <p className="card-text">Training for athletic events requiring prolonged effort, such as running a marathon, swimming a long distance, or climbing mountains.</p>

      </div>
      
    </div>
    <div className="card text-white bg-dark mb-3 col-3" style={{marginLeft: '10px', marginRight: '10px'}}>
      <div className="card-header"><strong>Pilates</strong></div>
      <div className="card-body">
        <p className="card-text">A system of exercises using special apparatus, designed to improve physical strength, flexibility, and posture, and enhance mental awareness.</p>

      </div>
      
    </div>
    <div className="card text-white bg-dark mb-3 col-3" style={{marginLeft: '10px', marginRight: '10px'}}>
      <div className="card-header"><strong>Weight-Loss</strong></div>
      <div className="card-body">
        <p className="card-text">Combines diet along with exercise to burn calories and improve overall health as well as lose body mass.</p>

      </div>
      
    </div>
  </div>

</div>
</div>





        {/* 2nd jumbotron */}

        <div

          className="jumbotron jumbotron-fluid"

          style={{
            height: "650px",
            margin: "0px",
            backgroundColor: 'white',
            padding: '0px',
            marginTop: '50px'
          }}
        >
<div style={{marginBottom: '35px'}}>

  <h1><strong>Find a trainers location that suits you best</strong></h1>
</div>
          <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <div id="map" style={{ height: '500px', width: '1200px' }}></div>

          </div>
        </div>

        {/* //   3rd jumbotron */}

        <div

          className="jumbotron jumbotron-fluid"
          style={{ height: "410px", borderBottom: "1px solid black", padding: '0px', marginBottom: '0', backgroundImage: `url(${jumbo1})` }}
        >
          <div className="container" style={{}}>
            <div style={{ padding: '20px', color: 'white' }}>
              <h1 className="display-4" style={{fontFamily: 'Josefin Sans, sans-serif', fontSize: '60px', textShadow: '2px 2px grey'}}>Choose Your Fit</h1>
            </div>



            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

              <div className="card text-white bg-success mb-3 col-3">
              <Link to={'/trainers?service=11'}>
                <div className="card-header">Strength</div>
                <div className="card-body">
                  <p className="card-text">A method of improving muscular strength by gradually increasing the ability to resist force through the use of free weights and machines.</p>
                </div>
                </ Link>
              </div>
             


              <div className="card text-white bg-success mb-3 col-3">
              <Link to={'/trainers?service=1'}>
                <div className="card-header">Yoga</div>
                <div className="card-body">
                  <p className="card-text">Combines physical exercises, mental meditation, and breathing techniques to strengthen the muscles and relieve stress.</p>

                </div>
                </Link>
              </div>

              <div className="card text-white bg-success mb-3 col-3">
              <Link to={'/trainers?service=51'}>
                <div className="card-header">Endurance</div>
                <div className="card-body">
                  <p className="card-text">Training for athletic events requiring prolonged effort, such as running a marathon, swimming a long distance, or climbing mountains.</p>

                </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
