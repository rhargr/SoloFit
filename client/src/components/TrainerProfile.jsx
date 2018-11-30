import React, { Component } from 'react';
import { render } from 'react-dom';
import * as classService from '../services/classes';

import profilePicture from '../images/profile-picture-placholder.png';
import rating from '../images/ratings.png';
import bgImage from '../images/background-banner-fitness.jpg';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {/* JUMBOTRON */}
                <div className="jumbotron jumbotron-fluid" id="trainerJumbo" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '350px' }}>
                </div>
                {/* END JUMBOTRON */}


                {/* PROFILE */}
                <div className="container-fluid" style={{ minHeight: '100vh' }}>
                    <div className="inner container" style={{ backgroundColor: 'lightgrey', padding: '20px', maxWidth: '960px' }}>

                        <div className="top-div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            {/* PROFILE PICTURE */}
                            <div className="profile-picture-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <div>
                                    <img src={profilePicture} className="img-rounded" alt="profile-picture" style={{ width: 'auto', height: '250px', border: '2px solid lightgrey', borderRadius: '3px' }} />
                                </div>
                                <div style={{ paddingLeft: '10px', textAlign: 'center' }}>
                                    <h2>Trainer's Name</h2>
                                    <p>Birmingham</p>
                                    <div className="social-media" style={{ display: 'flex', flexDirection: 'row', padding: '10px', fontSize: '35px', justifyContent: 'center' }}>
                                        <a href=""><i className="fab fa-facebook-square"></i></a>
                                        <a href="" style={{ paddingLeft: '10px', paddingRight: '10px' }}><i className="fab fa-twitter-square"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                    <button className="btn btn-primary"><i className="far fa-comment"></i> Message</button>
                                    <br />
                                    <img src={rating} style={{ width: 'auto', height: '50px' }} alt="rating" />
                                </div>
                            </div>
                            {/* END PROFILE PIC */}


                            {/* CHECK AVAIL */}
                            <div className="check-avail-container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

                                {/* If Logged in as trainer.. see this...
                                <div className="trainer-edit-button" style={{ paddingBottom: '10px' }}>
                                    <button className="btn btn-primary">Edit Profile</button>
                                </div> */}

                                <div className="card text-center" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Book a Session Today!</h5>
                                        <p className="card-text">Starting Cost : $35</p>
                                        <a href="#" className="btn btn-primary"><i className="far fa-calendar-alt"></i> Check Availability</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* END CHECK AVAIL */}


                        {/* NAV TRAINER PROFILE */}
                        <div style={{ paddingTop: '10px' }}>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">About</a></li>
                                    <li className="breadcrumb-item active"><a href="#">Reviews</a></li>
                                    <li className="breadcrumb-item"><a href="#">FAQ</a></li>
                                </ol>
                            </nav>
                        </div>
                        {/* END NAV */}


                        {/* ABOUT ME AND HOURS */}
                        <div className="about-me-container-hours" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div className="about-me">
                                <div className="card border-dark mb-3" style={{ maxWidth: '35rem' }}>
                                    <div className="card-header">ABOUT</div>
                                    <div className="card-body text-dark">
                                        <p className="card-text">Our fitness is important and something we should all enjoy. My aim is to create a positive and fun experience for clients, as well as using the best of my knowledge and experience to help clients achieve their goals.Credentials: CSEP – Certified Personal Trainer First Aid and CPR Level – C</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hours" >
                                <div>
                                    <div className="table-hours">
                                        <h3>Training Hourss</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td style={{ paddingRight: '30px', float: 'left' }}>Sunday</td>
                                                    <td style={{ float: 'right' }}>1:00 PM to 8:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ paddingRight: '30px', float: 'left' }}>Monday</td>
                                                    <td style={{ float: 'right' }}>8:00 AM to 8:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ paddingRight: '30px', float: 'left' }}>Tueday</td>
                                                    <td style={{ float: 'right' }}>9:00 AM to 9:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ paddingRight: '30px', float: 'left' }}>Wednesday</td>
                                                    <td style={{ float: 'right' }}>8:00 AM to 8:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ paddingRight: '30px', float: 'left' }}>Thursday</td>
                                                    <td style={{ float: 'right' }}>9:00 AM to 9:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ paddingRight: '30px', float: 'left' }}>Friday</td>
                                                    <td style={{ float: 'right' }}>1:00 PM to 8:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ paddingRight: '30px', float: 'left' }}>Saturday</td>
                                                    <td style={{ float: 'right' }}>10:00 AM to 10:00 PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END ABOUT ME */}

                        {/* REVIEWS */}
                        <div className="reviews-container container-fluid" style={{ paddingTop: '10px' }}>
                            <div className="reviews">

                                <div className="review-card" style={{ paddingBottom: '20px' }}>
                                    <div className="card" style={{ textAlign: 'left' }}>
                                        <div className="card-header">Client Name</div>
                                        <div className="card-body">
                                            <img src={rating} style={{ width: 'auto', height: '30px' }} alt="rating" />
                                            <br />
                                            <p className="card-text">I just started working out here and I’m very excited to see results. I know I feel so much better then before. They immediately put me on a meal plan. The environment is so comfortable and encouraging. I highly recommend them.</p>
                                            <p>Month/Day/Year</p>
                                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="review-card" style={{ paddingBottom: '20px' }}>
                                    <div className="card" style={{ textAlign: 'left' }}>
                                        <div className="card-header">Client Name</div>
                                        <div className="card-body">
                                            <img src={rating} style={{ width: 'auto', height: '30px' }} alt="rating" />
                                            <br />
                                            <p className="card-text">I just started working out here and I’m very excited to see results. I know I feel so much better then before. They immediately put me on a meal plan. The environment is so comfortable and encouraging. I highly recommend them.</p>
                                            <p>Month/Day/Year</p>
                                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="review-card" style={{ paddingBottom: '20px' }}>
                                    <div className="card" style={{ textAlign: 'left' }}>
                                        <div className="card-header">Client Name</div>
                                        <div className="card-body">
                                            <img src={rating} style={{ width: 'auto', height: '30px' }} alt="rating" />
                                            <br />
                                            <p className="card-text">I just started working out here and I’m very excited to see results. I know I feel so much better then before. They immediately put me on a meal plan. The environment is so comfortable and encouraging. I highly recommend them.</p>
                                            <p>Month/Day/Year</p>
                                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Profile;