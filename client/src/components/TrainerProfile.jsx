import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import * as classService from '../services/classes';
import Reviews from './Reviews';
import Rating from 'react-rating';
import TrainerRepository from '../repositories/trainer';

import profilePicture from '../images/profile-picture-placholder.png';
import bgImage from '../images/jumbo.jpg';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.trainerRepo = new TrainerRepository();
        this.handleRatingClick = this.handleRatingClick.bind(this);
        this.state = {
            initialRating: 3,
            trainer: {

            }
        };
    };

    componentDidMount() {
       
        this.trainerRepo.read(this.props.match.params.id).then((trainer) => {
            console.log(trainer);
            this.setState({
                trainer,
            });
        });
    };

    handleRatingClick(value) {
        console.log(value);
    };

    render() {
        return (
            <React.Fragment>
                {/* JUMBOTRON */}
                <div className="jumbotron jumbotron-fluid" id="trainerJumbo" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', marginBottom: '0' }}>
                </div>
                {/* END JUMBOTRON */}


                {/* PROFILE */}
                <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: 'grey'}}>
                    <div className="inner container" style={{ backgroundColor: 'lightgrey', padding: '20px', maxWidth: '960px' }}>

                        <div className="top-div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            {/* PROFILE PICTURE */}
                            <div className="profile-picture-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <div>
                                    <img src={profilePicture} className="img-rounded" alt="profile-picture" style={{ width: 'auto', height: '250px', border: '2px solid lightgrey', borderRadius: '3px' }} />
                                </div>
                                <div style={{ paddingLeft: '10px', textAlign: 'center' }}>
                                    <h2>{this.state.trainer.name}</h2>
                                    <p>{this.state.trainer.city}</p>
                                    <div className="social-media" style={{ display: 'flex', flexDirection: 'row', padding: '10px', fontSize: '35px', justifyContent: 'center' }}>
                                        <a href=""><i className="fa fa-facebook-square"></i></a>
                                        <a href="" style={{ paddingLeft: '10px', paddingRight: '10px' }}><i className="fa fa-twitter-square"></i></a>
                                        <a href=""><i className="fa fa-instagram"></i></a>
                                    </div>
                                    <button className="btn btn-primary" style={{marginBottom: '10px'}}><i className="fa fa-comment"></i> Message</button>
                                    <br/>
                                    <Rating
                                    initialRating={this.state.initialRating}
                                    emptySymbol="fa fa-star-o fa-2x"
                                    fullSymbol="fa fa-star fa-2x"
                                    style={{ color: 'gold'}}
                                    onClick={this.handleRatingClick}
                                    />
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
                                        <Link to="/Scheduling" className="btn btn-primary"><i className="fa fa-calendar"></i>Check Availability</Link>
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
                                        <h5>Yoga * Strength * Weight Loss </h5>
                                        <p className="card-text">Our fitness is important and something we should all enjoy. My aim is to create a positive and fun experience for clients, as well as using the best of my knowledge and experience to help clients achieve their goals.Credentials: CSEP – Certified Personal Trainer First Aid and CPR Level – C</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hours" >
                                <div>
                                    <div className="table-hours" style={{ paddingRight: '35px' }}>
                                        <h3>Training Hours</h3>
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

                            <h1 style={{paddingBottom: '10px'}}>Reviews</h1>
                              
                            <Reviews />
                           
                              
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="faq-container">
                            <div>
                                <h1 style={{paddingBottom: '10px'}}>FAQ</h1>
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">What is the benefit working with a Personal Trainer?</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Working with a Personal Trainer ensures the exercises performed are specific to your goals and are executed safely. Our team of Personal Trainers has the knowledge and skills required to work around injuries and medical conditions that make effective exercise difficult. One-on-One Personal Training offers a schedule that is flexible and based on your needs.</p>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Is my fitness level high enough to work with a Personal Trainer?</h5>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <p className="mb-1"> Of course! The Personal Trainers at Adventure 212 Fitness work with clients of all fitness levels. It is a misconception that only the super-fit work with Personal Trainers. The exercise selection is based on YOUR fitness level to provide the appropriate workout during your session with the trainer.</p>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">How many times each week should I work with a Personal Trainer?</h5>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <p className="mb-1">If you are new to exercise, working with a trainer 2-3 times/week is recommended. If possible, training should not occur on consecutive days to allow the body time to rest and heal.</p>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">How many sessions should I purchase?</h5>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <p className="mb-1">The number of sessions you purchase is completely up to you. Most clients choose between 12 and 24 sessions but we can accommodate any number.</p>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">I am a little apprehensive about Presonal Training; what is a "typical" session like?</h5>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <p className="mb-1">Each session begins with a warm-up to prepare the body for exercise. Many of our trainers like to use a standard warm-up that is easy for the client to learn. In fact, we have many clients that arrive a little early and warm-up on their own so they have more time to exercise with the trainer.

                                                        After the warm-up, the trainer will introduce the exercises for the day and explain what muscles will be worked and why the exercises were selected. The trainer’s role is to create a program that is specific to your goals and ensure each exercise is performed correctly and safely. In addition, our trainers spend a lot of time creating workouts that are not only effective but also fun. We routinely have clients mention that they like working with a trainer because the variety of exercises keep them motivated.

                                                        You will notice after a couple of weeks that you have learned quite a few exercises! Constant education is a key to Personal Training and prepares our clients for future success. You will notice that your clothes are fitting better, you have more energy, and some of those pesky aches and pains are gone (especially in the back and neck area). These are all benefits of an exercise program that is carefully created to meet your goals.</p>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">I want to lose weight, can a Personal Trainer help me with that?</h5>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <p className="mb-1">Weight loss IS Personal Training. Weight loss is the number one goal clients mention when joining a gym and working with a trainer. The Adventure 212 Fitness Personal Trainers will create a program that includes the appropriate amount of resistance and cardiovascular training to maximize your weight loss. The trainer will also make recommendations for proper nutrition and supplementation to assist with weight loss.</p>
                                    </a>
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