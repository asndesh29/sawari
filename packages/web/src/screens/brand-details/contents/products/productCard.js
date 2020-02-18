import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { ENDPOINT } from '../../../../config';

const priceRangeHandler = (obj) => {
  const { varients } = obj;
  const minPrice = Math.min(...varients.map((v) => v.exShowRoomPrice));
  const maxPrice = Math.max(...varients.map((v) => v.exShowRoomPrice));
  return `रु. ${minPrice / 100000} लाख - ${maxPrice / 100000} लाख`;
};

export default (obj, cardOnClickHandler, enquiryFormToggel) => {
  return (
    <Card
      className="product-card"
      style={{ height: 200 }}
      // onClick={() => cardOnClickHandler(obj)}
    >
      <div className="image-container" onClick={() => cardOnClickHandler(obj)} style={{ cursor: 'pointer'}}>
        <img src={`${ENDPOINT}/model_image/${obj.image}`} alt={obj.brandName} />
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.name}</span>
        <span style={{ fontWeight: 100, color: '#ff4202', fontStyle: 'italic' }}>{priceRangeHandler(obj)}</span>
        <div className="contact-dealer-button" onClick={enquiryFormToggel}>
          <span>Contact Dealer</span>
        </div>
      </div>
    </Card>
  );
};
