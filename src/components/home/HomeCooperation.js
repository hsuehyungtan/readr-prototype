import React, { Component } from 'react';

import './HomeCooperation.scss'

import factcheck from '../../assets/activity-factcheck.png'
import garbage from '../../assets/activity-garbage.png'
import renthouse from '../../assets/activity-renthouse.png'

class HomeCooperation extends Component {
  render() {
    return (
      <section className="home-cooperation">
        <h2 className="home__heading">一起協作台灣更好</h2>
        <div className="event">
          <div className="event__img-info">
            <img src={factcheck} />
            <div>
              <p className="event__title">聽打《事實查核》逐字稿</p>
              <p className="event__brief">讓總統候選人事實查核資料庫更完整</p>
            </div>
          </div>
          <button>前往協作</button>
        </div>
        <div className="event">
          <div className="event__img-info">
            <img src={garbage} />
            <div>
              <p className="event__title">分享《垃圾的一生》懶人包</p>
              <p className="event__brief">讓更多人關注環保議題</p>
            </div>
          </div>
          <button>前往分享</button>
        </div>
        <div className="event">
          <div className="event__img-info">
            <img src={renthouse} />
            <div>
              <p className="event__title">填寫《租屋現況》問卷</p>
              <p className="event__brief">協助租屋市場透明化</p>
            </div>
          </div>
          <button>前往填寫</button>
        </div>
      </section>
    )
  }
}

export default HomeCooperation;
