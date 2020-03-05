import React, { Component } from 'react';
import './HomeVoice.scss'

import icon from '../../assets/listening.png'

class HomeVoice extends Component {
  render() {
    return (
      <section className="home-voice">
        <h2 className="home__heading">聽記者聊幕後辛酸</h2>
        <a className="voice">
          <img src={icon} />
          <p className="voice__title">E01｜昔日K-POP粉今日挺港警　反送中後才說中文的Twitter網軍</p>
        </a>
        <a className="voice">
          <img src={icon} />
          <p className="voice__title">E02｜像免洗筷隨時會被取代？　揭密外送員的心路歷程</p>
        </a>
        <a className="voice">
          <img src={icon} />
          <p className="voice__title">E03｜變親密還是疏離？　兩岸青年交流團的層層揭密</p>
        </a>
        
      </section>
    )
  }
}

export default HomeVoice;
