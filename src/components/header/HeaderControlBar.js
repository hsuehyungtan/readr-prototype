import React, { Component } from 'react';
import './HeaderControlBar.scss'

import icon from '../../assets/user-login.png'

class HeaderControlBar extends Component {
  render() {
    return (
      <div className="app-header-control-bar">
        <img src={icon} />
      </div>
    )
  }
}

export default HeaderControlBar;
