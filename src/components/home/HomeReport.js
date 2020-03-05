import React, { Component } from 'react';

import './HomeReport.scss'

import reportImage from '../../assets/project-chinafund.png'

class HomeReport extends Component {
  render() {
    return (
      <section className="home-report">
        <h2 className="home__heading">讀＋觀點數據報導</h2>
        <a className="home-report__image">
          <img src={reportImage} />
        </a>
        <a className="home-report__link">
          錢進來，人出去，中國讓你發大財！ 解密臺商領取的中國補助
        </a>
        <a className="home-report__link">
          【Twitter 大戰中國網軍】剖析網軍互動！長期低度使用、蹭熱點、小夥伴支援
        </a>
        <a className="home-report__link">
          fakebook：假訊息與它們的產地
        </a>
      </section>
    )
  }
}

export default HomeReport;
