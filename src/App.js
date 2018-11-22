import React, { Component } from 'react';
import Projects from './components/services/github/Projects'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import GitHubLogo from './assets/GitHub_Logo.png'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
          <div className="row mt-5">
            <div className="col-md-3">
                <a href="https://github.com/ginganinja741" rel="noopener noreferrer"><img id="githubLogo" src={GitHubLogo} alt="GitHub Logo" /></a>
            </div>
          </div>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
