import React, { Component } from 'react';
import './SectionYellow.css';

class SectionYellow extends Component {
    render() {
      return (
        <div className="container-yellow-section"> 

            <div className="box-yellow-section">
                <span>10</span>
                <span>ODDANYCH WORKÓW</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
            </div>

            <div className="box-yellow-section">
                <span>5</span>
                <span>WSPARTYCH ORGANIZACJI</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
            </div>

            <div className="box-yellow-section">
                <span>7</span>
                <span>ZORGANIZOWANYCH ZBIÓREK</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
            </div>

        </div>
      );
    }
  }
  
  export default SectionYellow;