import React, { Component } from 'react';
import './AccountButtons.css';

class AccountButtons extends Component {
    render() {
      console.log(this.props);
      return (
        <div className="account-buttons-container"> 
            <button className="btn-1 btn-login">Zaloguj</button>
            <button className="btn-1 btn-account">Załóż konto</button>
    </div>
      );
    }
  }
  
  export default AccountButtons;