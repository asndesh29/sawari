import React from 'react';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

export default (obj, cardOnClickHandler) => {
  return (
    <Card
      className="product-card"
      onClick={() => cardOnClickHandler(obj, 'used')}
      style={{ maxHeight: 400 }}
    >
      <div className="image-container">
        <img src={`${ENDPOINT}/images/${obj.image1}`} alt={obj.vehicleName} />
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.model}</span>
        <span style={{ fontWeight: 100, color: '#ff4202', fontStyle: 'italic' }}>{`NRs. ${obj.expectedPrice} /-`}</span>
      </div>
    </Card>
  );
};
