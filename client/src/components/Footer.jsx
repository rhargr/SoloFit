import React, { Component } from "react";
import { render } from "react-dom";


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
            <footer id="foot" className="navbar sticky-bottom py-2" style={{backgroundColor: "#FFA400"}}>
                <span className="text-black mx-auto" style={{color: '#283044'}} ><strong>Birmingham, Ala.</strong></span>
              
                 <a href="http://facebook.com">
                 <i className="fa fa-facebook-square" style={{fontSize: '35px', color: '#283044'}}></i> 
                 </a>
                 <a href="http://instagram.com">
                 <i className="fa fa-instagram" style={{paddingLeft: '15px',paddingRight: '15px', fontSize: '35px', color: '#283044'}} ></i>
                 </a>
                 <a href="http://twitter.com">
                 <i className="fa fa-twitter-square" style={{fontSize: '35px', color: '#283044'}}></i>  
                 </a>       
        </footer>

      </React.Fragment>
    );
  }
}

export default Footer;
