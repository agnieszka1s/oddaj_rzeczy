import React from 'react';
import { BrowserRouter as Router , Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HeaderButtons from './Components/Home/SectionHeader/HeaderButtons/HeaderButtons';
import AccountButtons from './Components/Home/SectionHeader/AccountButtons/AccountButtons';
import Content from './Components/Home/SectionHeader/Content/Content';
import SectionYellow from './Components/Home/SectionYellow/SectionYellow';
import Section4Steps from './Components/Home/Section4Steps/Section4Steps';
import SectionAboutUs from './Components/Home/SectionAboutUs/SectionAboutUs';
import SectionOrganizations from './Components/Home/SectionOrganizations/SectionOrganizations';
import SectionContactUs from './Components/Home/SectionContactUs/SectionContactUs/SectionContactUs';
import Footer from './Components/Home/SectionContactUs/Footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <AccountButtons />
        <HeaderButtons />
        <Content />
      </header>
        <SectionYellow />
        <Section4Steps />
        <SectionAboutUs />
        <SectionOrganizations />
       <SectionContactUs />
       <Footer />
    </div>
    </Router>

  );
}

export default App;
