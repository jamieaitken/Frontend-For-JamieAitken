import React, { Component } from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faLinkedin, faInstagram, faTwitter, faGithub, faChrome} from '@fortawesome/free-brands-svg-icons';
import Header from '../Header/Header';
import Routes from '../Routes/Routes';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


library.add(faLinkedin, faInstagram, faTwitter, faGithub, faChrome);

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Routes/>
      </>
    );
  }
}

export default App;
