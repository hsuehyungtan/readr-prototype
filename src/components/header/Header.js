import React, { Component } from 'react';

import HeaderControlBar from './HeaderControlBar'
import logo from '../../assets/readr-logo.svg'
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <a href="/" className="logo" target="_blank">
          <img src={logo} alt="READr V.3" />
        </a>
        <HeaderControlBar />
      </header>
    )
  }
}


export default Header;
