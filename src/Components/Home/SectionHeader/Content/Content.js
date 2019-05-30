import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    render() {
      return (
        <div className="content-container"> 
            <span>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</span>
            <div class="decoration"></div>
            <button className="btn-content">ODDAJ <br />RZECZY</button>
            <button className="btn-content">ZORGANIZUJ <br /> ZBIÓRKĘ</button>
        </div>
      );
    }
  }
  
  export default Content;