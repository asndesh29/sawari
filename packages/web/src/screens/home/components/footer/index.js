import React from 'react';
import { Link } from 'react-router-dom';
import SocialFollow from './socialfollow';

export default () => {
  return (
    <div className="main-footer">
      <div style={{ width: '100%', height: 1, background: '#f1f1f1', marginTop: 10 }}></div>
      <div className="footer-container">
        <Link to="/about-us/">
          <span>About us</span>
        </Link>
        <Link to="/contact-us/">
          <span>Contact us</span>
        </Link>
        <SocialFollow />
      </div>
    </div>
  );
};
