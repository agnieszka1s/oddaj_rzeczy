import React from 'react';
// import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderButtons from './Components/SectionHeader/HeaderButtons/HeaderButtons';
import AccountButtons from './Components/SectionHeader/AccountButtons/AccountButtons';
import Content from './Components/SectionHeader/Content/Content';
import SectionYellow from './Components/SectionYellow/SectionYellow';
import Section4Steps from './Components/Section4Steps/Section4Steps';
import SectionAboutUs from './Components/SectionAboutUs/SectionAboutUs';
import SectionOrganizations from './Components/SectionOrganizations/SectionOrganizations';
import SectionContactUs from './Components/SectionContactUs/SectionContactUs/SectionContactUs';
import Footer from './Components/SectionContactUs/Footer/Footer';

function App() {
  return (
  
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
    

  );
}

export default App;
