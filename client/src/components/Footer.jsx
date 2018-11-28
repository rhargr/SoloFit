import React, { Component } from 'react';
import { render } from 'react-dom';

class Footer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="foot" className="navbar bg-warning fixed-bottom py-2">
                <span className="text-black mx-auto">Birmingham, Ala.</span>
              
                 <a href="http://facebook.com">
                 <i className="fab fa-facebook-square" style={{fontSize: '35px'}}></i> 
                 </a>
                 <a href="http://instagram.com">
                 <i className="fab fa-instagram" style={{paddingLeft: '15px',paddingRight: '15px', fontSize: '35px'}} ></i>
                 </a>
                 <a href="http://twitter.com">
                 <i className="fab fa-twitter-square" style={{fontSize: '35px'}}></i>  
                 </a>
                    
                   
                   

                 
         
               
               
        </footer>
        )
    }
};
       
    


export default Footer;