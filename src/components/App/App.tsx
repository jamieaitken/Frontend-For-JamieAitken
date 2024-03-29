import React, { Component } from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faLinkedin, faInstagram, faTwitter, faGithub, faChrome} from '@fortawesome/free-brands-svg-icons';
import Header from '../Header/Header';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



library.add(faLinkedin, faInstagram, faTwitter, faGithub, faChrome);

class App extends Component {
  render() {
    return (
      <>
        <Header/>
      </>
    );
  }
}

export default App;
