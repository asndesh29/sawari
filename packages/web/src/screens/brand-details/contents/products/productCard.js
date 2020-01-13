import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { ENDPOINT } from '../../../../config';

export default (obj, cardOnClickHandler) => {
  return (
    <Card
      className="product-card"
      style={{ height: 200 }}
      // onClick={() => cardOnClickHandler(obj)}
    >
      <div className="image-container">
        <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.brandName} />
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.name}</span>
        <span style={{ fontWeight: 100, color: 'blue', fontStyle: 'italic'}}>{`NRs. ${obj.price} - ${obj.price} /-`}</span>
        <div className="contact-dealer-button">
          <span>Contact Dealer</span>
        </div>
      </div>
    </Card>
  );
};
