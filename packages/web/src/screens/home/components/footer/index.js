import React from 'react';
import SocialFollow from './socialfollow';

export default () => {
  return (
    <div className="main-footer">
      <div style={{ width: '100%', height: 1, background: '#f1f1f1', marginTop: 10 }}></div>
      <div className="footer-container">
        <span>About us</span>
        <span>Contact us</span>
        <SocialFollow />
      </div>
    </div>
  );
};
