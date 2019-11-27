import React from 'react';
import { Icon, Divider } from '@blueprintjs/core';

export default () => {
  return (
    <div className="nav-menu">
      <div className="menu-item">
        <Icon icon="home" />
        <span style={{ marginLeft: 5 }}>Home</span>
      </div>
      <Divider style={{ background: 'white', marginBottom: 0 }}/>
      <div className="menu-item">
        <Icon icon="drive-time" color="yellow" />
        <span style={{ marginLeft: 5, color: 'yellow' }}>Vehicle</span>
      </div>
    </div>
  );
};
