import React from 'react';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

const priceRangeHandler = (obj) => {
  const { varients } = obj;
  const minPrice = Math.min(...varients.map((v) => v.exShowRoomPrice));
  const maxPrice = Math.max(...varients.map((v) => v.exShowRoomPrice));
  return `NRs. ${minPrice} - ${maxPrice}/-`;
};

export default (obj, cardOnClickHandler) => {
  return (
    <Card
      className="product-card"
      onClick={() => cardOnClickHandler(obj)}
      style={{ maxHeight: 400 }}
    >
      <div className="image-container">
        <img src={`${ENDPOINT}/model_image/${obj.image}`} alt={obj.name} />
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.name}</span>
        <span style={{ fontWeight: 100, color: '#ff4202', fontStyle: 'italic' }}>{priceRangeHandler(obj)}</span>
      </div>
    </Card>
  );
};
