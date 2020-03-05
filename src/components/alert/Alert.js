import React, { Component } from 'react';
import './Alert.scss'

import icon from '../../assets/done.png'

class Alert extends Component {
  render() {
    return (
      <div className="alert">
        <img className="alert__icon" src={icon} />
      </div>
    )
  }
}

export default Alert;