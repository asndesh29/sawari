import React from 'react';
import MenuBar from './menuBar';
import SerachElement from './SearchElement';

export default () => (
  <div className="main_navbar">
    <div className="home-nav-logo">
      <MenuBar />
    </div>
    <div className="search-element">
      <SerachElement />
    </div>
  </div>
);
