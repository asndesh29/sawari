import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

export default (obj) => {
  return (
    <Card
      className="product-card"
      // onClick={() => cardOnClickHandler(obj, 'used')}
      style={{ maxHeight: 400 }}
    >
      <div className="image-container" style={{ cursor: 'pointer' }}>
        <Link to={`/used-vehicle/details/${obj.model.replace(/\s/g, '')}-${obj.id}`.toLocaleLowerCase()}>
          <img src={`${ENDPOINT}/images/${obj.image1}`} alt={obj.vehicleName} />
        </Link>
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.model}</span>
        <span style={{ fontWeight: 100, color: '#ff4202', fontStyle: 'italic' }}>{`NRs. ${obj.expectedPrice} /-`}</span>
      </div>
    </Card>
  );
};
