import React, { Component } from 'react';
import './SectionOrganizations.css';

class SectionOrganizations extends Component {
    render() {
      return (
        <div className="container-organizations-section"> 
          <span>Komu pomagamy?</span>
          <div className="decoration"></div>
          <div className="small-container-organizations">
                <div>Fundacjom</div>
                <div>Organizacjom pozarządowym</div> 
                <div>Lokalnym zbiórkom</div>
          </div>
          <section>W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi wpsółpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</section>
            <div className="organizations-list">
            </div>
        </div>
      );
    }
  }
  
  export default SectionOrganizations;