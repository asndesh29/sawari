import React from 'react';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../config';

const priceRangeHandler = (obj) => {
  const { varients } = obj;
  const minPrice = Math.min(...varients.map((v) => v.exShowRoomPrice));
  const maxPrice = Math.max(...varients.map((v) => v.exShowRoomPrice));
  return `रु. ${minPrice / 100000} - ${maxPrice / 100000} लाख सम्म`;
};

export default (obj, cardOnClickHandler) => {
  return (
    <Card
      interactive
      style={{ width: 300, height: 220, padding: 0, overflow: 'hidden', margin: 5 }}
      onClick={() => cardOnClickHandler(obj)}
    >
      <div style={{ width: '100%', height: '80%' }}>
        <img src={`${ENDPOINT}/model_image/${obj.image}`} alt={obj.brandName} style={{ height: '100%', width: '100%', objectFit: 'fill'}} />
      </div>
      <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
        <span style={{ fontSize: 16 }}>{obj.name}</span>
        <span style={{ color: '#ff4202', fontStyle: 'italic' }}>{priceRangeHandler(obj)}</span>
      </div>
    </Card>
  );
};
