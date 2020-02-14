import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { ENDPOINT } from '../../../../../config';

export default ({ obj }) => {
  // console.log('offer details card', obj);
  return (
    <Card
      className="product-card"
      style={{ height: 'auto', display: 'flex' }}
    // onClick={() => cardOnClickHandler(obj)}
    >
      <div className="image-container">
        <img src={`${ENDPOINT}/offer_image/${obj.image}`} alt={obj.brandName} />
      </div>
      <div className="description">
        <span style={{ fontSize: 20, fontWeight: 'bold' }}>{`${obj.message} Test data is data which has been specifically identified for use in tests, typically of a computer program, or unexpected input.`}</span>
      </div>
    </Card>
  );
};
