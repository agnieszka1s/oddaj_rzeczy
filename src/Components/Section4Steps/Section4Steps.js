import React, { Component } from 'react';
import './Section4Steps.css';

class Section4Steps extends Component {
    render() {
      return (
        <div className="container-4Steps-section"> 
          <span>Wystarczą 4 proste kroki</span>
          <div className="decoration"></div>
          <div className="small-container-icons">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
          <button>ZAŁÓŻ KONTO</button>
        </div>
      );
    }
  }
  
  export default Section4Steps;