/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Card } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import MenuBar from './menu-bar';
import SerachElement from './SearchElement';
import LoginRegistration from './login-registration';
import Logo from '../../../../assets/logo.jpeg';
import DrawerMenu from './drawer-menu';

export default () => (
  <Card elevation={2} className="main_navbar">
    <div className="search-element">
      <div className="main-logo">
        <div className="main-drawer">
          <DrawerMenu />
        </div>
        <Link to="/" className="logo-link">
          <img src={Logo} />
        </Link>
      </div>
      <SerachElement />
      <LoginRegistration />
    </div>
    <div style={{ width: '100%', height: 1, background: '#f5f5f5' }} />
    <div className="home-nav-logo" style={{ zIndex: 2 }}>
      <MenuBar />
    </div>
  </Card>
);
