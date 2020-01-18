import React from 'react';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../config';

const priceRangeHandler = (obj) => {
  const { varients } = obj;
  const minPrice = Math.min(...varients.map((v) => v.exShowRoomPrice));
  const maxPrice = Math.max(...varients.map((v) => v.exShowRoomPrice));
  return `NRs. ${minPrice} - ${maxPrice}/-`;
};

export default (obj, cardOnClickHandler) => {
  return (
    <Card
      interactive
      className="product-card"
      style={{ width: 'auto', height: 220, padding: 5, overflow: 'hidden' }}
      onClick={() => cardOnClickHandler(obj)}
    >
      <img src={`${ENDPOINT}/model_image/${obj.image}`} alt={obj.brandName} style={{ height: 160, width: 'auto' }} />
      <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
        <span style={{ fontSize: 16 }}>{obj.name}</span>
        <span>{priceRangeHandler(obj)}</span>
      </div>
    </Card>
  );
};
