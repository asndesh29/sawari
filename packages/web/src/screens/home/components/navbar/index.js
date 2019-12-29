import React from 'react';
import MenuBar from './menu-bar';
import SerachElement from './SearchElement';
import LoginRegistration from './login-registration';

export default () => (
  <div className="main_navbar">
    <div className="search-element">
      <SerachElement />
      <LoginRegistration />
    </div>
    <div className="home-nav-logo">
      <MenuBar />
    </div>
  </div>
);
