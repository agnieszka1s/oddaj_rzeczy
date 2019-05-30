import React, { Component } from 'react';
import './HeaderButtons.css';

class HeaderButtons extends Component {
    render() {
      console.log(this.props);
      return (
       <div className="header-buttons-container">
         <button className="btn-2 btn-start">Start</button>
         <button className="btn-2 ">O co chodzi?</button>
         <button className="btn-2 btn-about-us">O nas</button>
         <button className="btn-2 ">Fundacje i organizacje</button>
         <button className="btn-2 btn-contact">Kontakt</button>
       </div>
      );
    }
  }
  
  export default HeaderButtons;