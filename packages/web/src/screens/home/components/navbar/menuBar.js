import React from 'react';
import { Icon, Divider } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="nav-menu">
      <div className="menu-item">
        <Icon icon="home" />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{ marginLeft: 5 }}>Home</span>
        </Link>
      </div>
      <Divider style={{ background: 'white', marginBottom: 0 }}/>
      <div className="menu-item">
        <Icon icon="drive-time" color="yellow" />
        <span style={{ marginLeft: 5, color: 'yellow' }}>Vehicle</span>
      </div>
    </div>
  );
};
