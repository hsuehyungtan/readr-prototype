import React, { Component } from 'react';

import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a className="footer__link">關於我們</a>
        <a className="footer__link">服務條款</a>
        <a className="footer__link">聯絡我們</a>
      </footer>
    )
  }
}

export default Footer;
