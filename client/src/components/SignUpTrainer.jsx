import React, { Component } from 'react';
import { render } from 'react-dom';
import * as classService from '../services/classes';
import BGPic from "../images/BG.png"

class New extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div style={{minHeight: '100vh', backgroundImage: `url(${BGPic})`, backgroundSize: "cover"}}>
            <div style={{display: 'flex', flexDirection: 'column', position: 'relative', top: '100px', color: 'white'}}>
                <h3>"Combine your natural ability with a mission to help people and you will have a rich, fulfilling life"</h3>
                <h4>-Bryan Krahn, Physique Coach</h4>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
          
            <div style={{display: 'flex', justifyContent: 'center', position: 'relative', top: '200px', flexDirection: 'column', maxWidth: '800px'}}>
            <ul className="nav nav-tabs">
                 <li className="nav-item">
                    <a className="nav-link" href="/Sign-Up">Client</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/Sign-Up-Trainer">Trainer</a>
                </li>
            </ul>
            <form style={{ maxWidth: '900px', padding: '25px', borderRadius: '3px', backgroundColor: 'lightGray'}}>
            <h1>Trainer</h1>
  <div className="form-row">
  
    <div className="form-group col-md-6">
    
      <label htmlFor="inputEmail4"></label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4"></label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress"></label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity"></label>
      <input type="text" className="form-control" id="inputCity" placeholder="City" />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState"></label>
      <select id="inputState" className="form-control">
        <option selected>State</option>
        <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip"></label>
      <input type="text" className="form-control" id="inputZip" placeholder="Zip" />
    </div>
  </div>
  <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}>
  <label className="checkbox-inline"><input type="checkbox" value="" />Yoga</label>
  <label className="checkbox-inline"><input type="checkbox" value="" />Endurance</label>
  <label className="checkbox-inline"><input type="checkbox" value="" />Strength</label>
  <label className="checkbox-inline"><input type="checkbox" value="" />Weight-Loss</label>
  </div>

  <div style={{display: 'flex', justifyContent: 'center', maxWidth: '100%' }}>
  <div className="form-group col-md-6" style={{flex: '1', maxWidth:'100%'}}>
      <label htmlFor="inputCity"></label>
      <textarea type="text-area" className="form-control" id="input" placeholder="About Me"/>
  </div>

  <div className="form-group">
  </div>
  </div>

  <button type="submit" className="btn btn-primary">Create Account</button>
</form>
</div>
</div>
</div>

        )
    }
}

export default New;