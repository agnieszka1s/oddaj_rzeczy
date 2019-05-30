import React, { Component } from 'react';
import './AccountButtons.css';
import { BrowserRouter as Router , Route, Switch, Link } from 'react-router-dom';
// import Home from

class AccountButtons extends Component {
    render() {
      console.log(this.props);
      return (
        // nav z listą?
        <div className="account-buttons-container"> 
<nav>
  <ul>
    <li><Link to="/logIn">Zaloguj</Link></li>
    <li><Link to="/signIn">Załóż konto</Link></li>
  </ul>
</nav>

{/* <Route path ="/" Component={Home} /> */}
 {/* <Route path ="/logIn" Component={LogIn} />
  <Route path ="/signIn" Component={signIn} /> */}

{/*         
            <button className="btn-1 btn-login">Zaloguj</button>
            <button className="btn-1 btn-account">Załóż konto</button> */}
    </div>
      );
    }
  }
  
  export default AccountButtons;