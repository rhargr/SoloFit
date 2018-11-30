import React, { Component } from 'react';
import { render } from 'react-dom';
import Homepage from './Home';

class SignUp extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            
            <div style={{minHeight: '100vh'}}>
            <div style={{display: 'flex', flexDirection: 'column', position: 'relative', top: '100px'}}>
                <h3>"Motivation is what gets you started. Habit is what keeps you going."</h3>
                <h4>-Jim Ryan, Olympic Athelete</h4>
            </div>
          
            <div style={{display: 'flex', justifyContent: 'center'}}>
          
            <div style={{display: 'flex', justifyContent: 'center', position: 'relative', top: '200px', flexDirection: 'column', maxWidth: '800px'}}>
            <ul className="nav nav-tabs">
                 <li className="nav-item">
                    <a className="nav-link active" href="/Sign-Up">Client</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Sign-Up-Trainer">Trainer</a>
                </li>
            </ul>
            <form style={{ maxWidth: '900px', border: '1px solid black', padding: '25px', borderRadius: '3px', backgroundColor: 'lightGray'}}>
            <h1>Client</h1>
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
  <div className="form-group">
  </div>
  <button type="submit" className="btn btn-primary">Create Account</button>
</form>
</div>
</div>
</div>

        

        )
    }
}

export default SignUp;