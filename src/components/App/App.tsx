import React, { Component } from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faLinkedin, faInstagram, faTwitter, faGithub, faChrome} from '@fortawesome/free-brands-svg-icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routes from '../Routes/Routes';
import './App.css';

library.add(faLinkedin, faInstagram, faTwitter, faGithub, faChrome);

class App extends Component {
  render() {
    return (
      <div id="body">
        <div id="informationContent">
          <Header/>
          <Footer/>
        </div>
        <div id="content">
          <Routes/>
        </div>
      </div>
    );
  }
}

export default App;
