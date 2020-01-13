import React from 'react';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

export default (obj, cardOnClickHandler) => {
  return (
    <Card
      className="product-card"
      onClick={() => cardOnClickHandler(obj)}
    >
      <div className="image-container">
        <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.name} />
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.name}</span>
        <span style={{ fontWeight: 100, color: '#ff4202', fontStyle: 'italic' }}>{`NRs. ${obj.price} - ${obj.price} /-`}</span>
      </div>
    </Card>
  );
};
