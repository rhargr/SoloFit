import React, { Component } from 'react';
import { render } from 'react-dom';

class Footer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="foot" className="navbar bg-info sticky-bottom py-2">
                <span className="text-black mx-auto"><strong>Birmingham, Ala.</strong></span>
              
                 <a href="http://facebook.com">
                 <i className="fa fa-facebook-square" style={{fontSize: '35px', color: 'black'}}></i> 
                 </a>
                 <a href="http://instagram.com">
                 <i className="fa fa-instagram" style={{paddingLeft: '15px',paddingRight: '15px', fontSize: '35px', color: 'black'}} ></i>
                 </a>
                 <a href="http://twitter.com">
                 <i className="fa fa-twitter-square" style={{fontSize: '35px', color: 'black'}}></i>  
                 </a>       
        </footer>
        )
    }
};
       
    


export default Footer;