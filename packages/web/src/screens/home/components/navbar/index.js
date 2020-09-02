/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { Card } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import MenuBar from './menu-bar';
import SerachElement from './SearchElement';
import LoginRegistration from './login-registration';
import Logo from '../../../../assets/logo-new.png';
import DrawerMenu from './drawer-menu';





window.addEventListener('scroll', function () {
  const isTop = this.window.scrollY > 80;
  const nav = this.document.getElementById('nav');
  if (isTop) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
})



export default () => (
  <div className="main_navbar" id="nav">
    <div className="search-element">
      <div className="main-logo">
        <div className="main-drawer">
          <DrawerMenu />
        </div>
        <div className="sell-and-logo">
          <Link to="/" className="logo-link">
            <img src={Logo} />
          </Link>
          <Link to="/sell-vehicle">
            <div className="sell-button">
              <AiFillCamera size={25} />
              <span style={{ fontSize: 18 }}>Sell</span>
            </div>
          </Link>
        </div>
      </div>
      <SerachElement />
      <div className="login-registration">
        <Link className="sell-link" to="/sell-vehicle">
          <div>
            <AiFillCamera size={20} />
            <span>Sell</span>
          </div>
        </Link>
      </div>
    </div>
    <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.2)' }} />
    <div className="home-nav-logo" style={{ zIndex: 2 }}>
      <MenuBar />
    </div>
  </div>
);
