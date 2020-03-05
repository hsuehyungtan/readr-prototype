import React, { Component } from 'react';

import './Home.scss'
import Alert from '../alert/Alert'
import HomeCooperation from './HomeCooperation'
import HomeReport from './HomeReport'
import HomeVoice from './HomeVoice'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <HomeReport />
        <HomeCooperation />
        <HomeVoice />
        <Alert />
      </div>
    )
  }
}

export default Home;
