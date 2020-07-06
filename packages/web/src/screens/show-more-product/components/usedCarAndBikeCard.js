import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

export default (obj) => {
  return (
    <Card
      className="used-card"
      // onClick={() => cardOnClickHandler(obj, 'used')}
    >
      <div className="image-container" style={{ cursor: 'pointer' }}>
        <Link to={`/used-vehicle/details/${obj.model.replace(/\s/g, '')}-${obj.id}`.toLocaleLowerCase()}>
          <img src={`${ENDPOINT}/images/${obj.image1}`} alt={obj.vehicleName} />
        </Link>
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.model}</span>
        <div style={{ color: '#828282', marginLeft: 10 }}>
          <span style={{ marginLeft: 10 }}>{obj.city}</span>
          <span style={{ marginLeft: 10 }}>|</span>
          <span style={{ marginLeft: 10 }}>{`${obj.makeYear}`}</span>
          <span style={{ marginLeft: 10 }}>|</span>
          <span style={{ marginLeft: 10 }}>{`${obj.kmsDriven}Kms`}</span>
        </div>
        <span style={{ fontWeight: 100, color: '#ff4202', fontStyle: 'italic' }}>{`रु. ${obj.expectedPrice} लाख`}</span>
      </div>
    </Card>
  );
};
