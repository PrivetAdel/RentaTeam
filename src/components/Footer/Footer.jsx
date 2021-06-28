import React from 'react';
import vkIcon from '../../assets/icon-vk.svg';
import fbIcon from '../../assets/icon-fb.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import classmatesIcon from '../../assets/icon-classmates.svg';
import appStore from '../../assets/app-store.png';
import googlePlay from '../../assets/google-play.png';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__inner">
        <div className="footer__sections">
          <ul>
            <h3>Раздел 1</h3>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
          </ul>

          <ul>
            <h3>Раздел 1</h3>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
          </ul>
        </div>

        <div className="footer__logo"></div>

        <div className="footer__sections">
          <ul>
            <h3>Раздел 1</h3>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
          </ul>

          <ul>
            <h3>Раздел 1</h3>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
            <li>Подраздел</li>
          </ul>
        </div>
      </div>

      <div className="footer__contacts">
        <div className="footer__social">
          <a href="/">
            <img src={vkIcon} alt="vk icon" />
          </a>
          <a href="/">
            <img src={fbIcon} alt="fb icon" />
          </a>
          <a href="/">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="/" target="_blank">
            <img src={classmatesIcon} alt="classmates icon" />
          </a>
        </div>
        <div className="footer__download">
          <a href="/" target="_blank">
            <img src={appStore} alt="app store" />
          </a>
          <a href="/" target="_blank">
            <img src={googlePlay} alt="google play" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
