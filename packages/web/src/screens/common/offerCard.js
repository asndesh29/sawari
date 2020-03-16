import React from 'react';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../config';

export default ({ obj }) => {
  // console.log('offer details card', obj);
  return (
    <Card
      className="offer-card"
    >
      <div className="image-container">
        <img src={`${ENDPOINT}/offer_image/${obj.image}`} alt={obj.brandName} />
      </div>
      <div className="description">
        <span style={{ fontSize: 20, fontWeight: 'bold' }}>{`${obj.message}`}</span>
      </div>
    </Card>
  );
};
