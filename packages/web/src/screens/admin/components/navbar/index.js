import React from 'react';
import MenuBar from './menuBar';
import UserProfile from '../UserProfile';

export default (props) => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{ color: 'yellow' }}>Welcome To Admin Panel</h1>
    </div>
    <UserProfile {...props} />
  </div>
);
