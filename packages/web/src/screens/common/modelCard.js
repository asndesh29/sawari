import React from 'react';
import { Card } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { ENDPOINT } from '../../config';

const priceRangeHandler = (obj) => {
  const { varients } = obj;
  const minPrice = Math.min(...varients.map((v) => v.exShowRoomPrice));
  const maxPrice = Math.max(...varients.map((v) => v.exShowRoomPrice));
  return `रु. ${minPrice / 100000} - ${maxPrice / 100000} लाख सम्म`;
};

export default (obj) => {
  return (
    <div className="model-content">
      <Link
        to={`/details/${obj.name.replace(/\s/g, '')}-${obj.id}`.toLocaleLowerCase()}
        className="model-link"
      >
        <Card
          interactive
          className="model-card"
        >
          <div className="image-content">
            <img
              src={`${ENDPOINT}/model_image/${obj.image}`}
              alt={obj.brandName}
            />
          </div>
          <div className="description-content">
            <span style={{ fontSize: 16 }}>{obj.name}</span>
            <span style={{ color: '#ff4202', fontStyle: 'italic' }}>{priceRangeHandler(obj)}</span>
          </div>
        </Card>
      </Link>
    </div>
  );
};
