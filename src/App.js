import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProgressComponent from './components/progress/progress';
import BrowserDetectComponent from './components/browser-detect/browser-detect';
import HeaderComponent from './components/Header/Header';
import IntroductionComponent from './components/introduction/introduction';
import AboutComponent from './components/about/About';
import Copy from './components/introduction copy/introduction';
// import Dashboard from './Dashboard';
import './App.css';
// import { Card } from 'material-ui';

function App() {
  return (
    <MuiThemeProvider>
    <div className="App">
      <BrowserDetectComponent></BrowserDetectComponent>
      <ProgressComponent></ProgressComponent>


      <div className="section header-section">
        <div className="section-container header-component">
          <HeaderComponent></HeaderComponent>
        </div>
      </div>

      <div className="section">
            <div className="section-container">
              <IntroductionComponent></IntroductionComponent>
            </div>
          </div>

          <div className="section">
            <div className="section-container">
              <AboutComponent></AboutComponent>
            </div>
          </div>

          <div className="section">
            <div className="section-container">
              <Copy></Copy>
            </div>
          </div>

    </div>
  </MuiThemeProvider>
  );
}

export default App;
