/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { Card } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import MenuBar from './menu-bar';
import SerachElement from './SearchElement';
import LoginRegistration from './login-registration';
import Logo from '../../../../assets/logo.png';
import DrawerMenu from './drawer-menu';

export default () => (
  <Card elevation={2} className="main_navbar">
    <div className="search-element">
      <div className="main-logo">
        <div className="main-drawer">
          <DrawerMenu />
        </div>
        <div className="sell-and-logo" style={{ marginTop: -70, marginLeft: 70}}>
          <Link to="/" className="logo-link">
            <img src={Logo} style={{ height: 150, width: 150, marginBottom: 10 }} />
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
        <Link to="/sell-vehicle">
          <div style={{ cursor: 'pointer', borderRadius: 5, background: '#ff4202', color: 'white', padding:5, paddingLeft: 10, paddingRight: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AiFillCamera size={25} />
            <span style={{ fontSize: 18 }}>Sell</span>
          </div>
        </Link>
      </div>
    </div>
    <div style={{ width: '100%', height: 1, background: '#f5f5f5' }} />
    <div className="home-nav-logo" style={{ zIndex: 2 }}>
      <MenuBar />
    </div>
  </Card>
);
