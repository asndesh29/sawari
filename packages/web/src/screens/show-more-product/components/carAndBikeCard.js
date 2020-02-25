import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

const priceRangeHandler = (obj) => {
  const { varients } = obj;
  const minPrice = Math.min(...varients.map((v) => v.exShowRoomPrice));
  const maxPrice = Math.max(...varients.map((v) => v.exShowRoomPrice));
  return `रु. ${minPrice / 100000} - ${maxPrice / 100000} लाख सम्म`;
};

export default (obj) => {
  return (
    <Card
      className="product-card"
      // onClick={() => cardOnClickHandler(obj, 'new')}
    >
      <div className="image-container" style={{ cursor: 'pointer' }}>
        <Link to={`/details/${obj.name.replace(/\s/g, '')}-${obj.id}`.toLocaleLowerCase()}>
          <img src={`${ENDPOINT}/model_image/${obj.image}`} alt={obj.name} />
        </Link>
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.name}</span>
        <span style={{ fontWeight: 100, color: '#ff4202', fontStyle: 'italic' }}>{priceRangeHandler(obj)}</span>
      </div>
    </Card>
  );
};
