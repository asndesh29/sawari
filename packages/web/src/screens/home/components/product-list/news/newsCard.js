import React from 'react';
import { Card } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { ENDPOINT } from '../../../../../config';

export default (obj, cardOnClickHandler) => {
  return (
    <Card
      // interactive
      className="news-card"
      onClick={() => cardOnClickHandler(obj)}
    >
      <div className="news-container">
        <div className="image-container">
          <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.brandName} onClick={() => cardOnClickHandler(obj)} />
        </div>
        <div style={{ marginTop: 20, marginLeft: 10 }}>
          <span style={{ fontSize: 20 }}>{obj.header}</span>
          <br />
          <span style={{ color: '#757575', fontSize: 10 }}>{obj.date}</span>
          <br />
          <br />
          <span style={{ color: '#757575' }}>{obj.content}</span>
        </div>
      </div>
      <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
        <Link to="/"><span style={{ fontWeight: 'bold' }}>More...</span></Link>
      </div>
    </Card>
  );
};
