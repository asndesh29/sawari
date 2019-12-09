import React from 'react';
import { Icon, Divider } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="nav-menu">
      <div className="menu-item">
        <span style={{ marginLeft: 5 }}>Enquiry</span>
      </div>
      <Divider style={{ background: 'white', marginBottom: 0 }} />
      <div className="menu-item">
        <span style={{ marginLeft: 5, color: 'yellow' }}>Products</span>
      </div>
    </div>
  );
};
