import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import { ENDPOINT } from '../../config';

export default (obj, type) => {
  return (
    <div className="brand-content">
      <Link to={`${type}/brand/${obj.brandName.replace(/\s/g, '')}-${obj.id}`.toLocaleLowerCase()} className="brand-link">
        <Card
          interactive
          className="brand-card"
        >
          <div className="image-container">
            <img src={`${ENDPOINT}/brand_image/${obj.brandImageUrl}`} alt={obj.brandName} />
          </div>
          <span>{obj.brandName}</span>
        </Card>
      </Link>
    </div>
  );
};
