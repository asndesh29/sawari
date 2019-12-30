import React from 'react';
import { Card } from '@blueprintjs/core';
import MenuBar from './menu-bar';
import SerachElement from './SearchElement';
import LoginRegistration from './login-registration';

export default () => (
  <Card elevation={1} className="main_navbar">
    <div className="search-element">
      <SerachElement />
      <LoginRegistration />
    </div>
    <div style={{ width: '100%', height: 1, background: '#f5f5f5'}} />
    <div className="home-nav-logo">
      <MenuBar />
    </div>
  </Card>
);
