import React from 'react';
import { Card, Button, Icon } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

const locateClickHandler = (obj) => {
  window.open(`https://www.google.com/maps/dir/Current+Location/${obj.latitude},${obj.logitude}`);
};

export default (obj, onEnqueryClickHandler) => {
  return (
    <Card
      className="product-card"
    // onClick={() => cardOnClickHandler(obj)}
      style={{ maxHeight: 'auto' }}
    >
      <div className="image-container">
        <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.name} />
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.name}</span>
        <span style={{ fontWeight: 40, width: '90%' }}>{`${obj.description}`}</span>
        <div style={{ marginTop: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
          <div style={{ display: 'flex' }}>
            <Icon icon="phone" style={{ marginRight: 10, color: 'green' }} />
            <span>{obj.phoneNo}</span>
          </div>
          <div style={{ display: 'flex' }}>
            <Icon icon="envelope" style={{ marginRight: 10, color: 'green', marginLeft: 10 }} />
            <span>sawarikinbech@gmail.com</span>
          </div>
          <Button text="Locate" fill intent="success" style={{ marginTop: 10 }} onClick={() => locateClickHandler(obj)} />
          <Button text="Enquiry" fill intent="success" onClick={() => onEnqueryClickHandler(obj)} style={{ marginTop: 10 }} />
        </div>
      </div>
    </Card>
  );
};
