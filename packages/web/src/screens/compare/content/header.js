/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import compareImage from '../../../assets/compare-cars.jpg';

export default () => {
  return (
    <div className="body-header">
      <span style={{ fontWeight: 'bold', fontSize: 50, position: 'absolute', color: 'white', textAlign: 'center', marginTop: 200, marginLeft: 50 }}>
        If You Confused. Please Compare Your Vehicle Here...
      </span>
      <img src={compareImage} style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
    </div>
  );
};
