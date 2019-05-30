import React, { Component } from 'react';
import './SectionAboutUs.css';

class SectionAboutUs extends Component {
    render() {
      return (
        <div className="container-aboutus-section"> 
            <div className="small-container-aboutus">
                <span>O nas</span>
                <div className="decoration"></div>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div className="aboutus-image"></div>
        </div>
      );
    }
  }
  
  export default SectionAboutUs;