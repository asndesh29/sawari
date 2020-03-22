import React from 'react';
import { Card, Elevation, Icon, Button } from '@blueprintjs/core';
import { ENDPOINT } from '../../../../config';

const locateClickHandler = (obj) => {
  window.open(`https://www.google.com/maps/dir/Current+Location/${obj.latitude},${obj.logitude}`);
};

export default (obj, onEnqueryClickHandler, toggleEnquiryForm) => {

  return (
    <Card
      className="product-card"
      // onClick={() => cardOnClickHandler(obj)}
      style={{ padding: 20 }}
    >
      <div className="image-container">
        <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.brandName} />
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.name}</span>
        <span style={{ fontWeight: 40, width: '70%' }}>{`${obj.description}`}</span>
        <div className="dealer-info">
          <div>
            <Icon icon="phone" style={{ color: 'green', marginRight: 5 }} />
            <span>{obj.phoneNo}</span>
          </div>
          <div>
            <Icon icon="envelope" style={{ color: 'green', marginRight: 5, marginTop: 5 }} />
            <span>sawarikinbech@gmail.com</span>
          </div>
          <div className="dealer-button">
            <Button id="btn" text="Locate" fill intent="success" onClick={() => locateClickHandler(obj)} />
            <Button id="btn" text="Enquiry" fill intent="success" onClick={() => toggleEnquiryForm(obj.id)} />
          </div>
        </div>
      </div>
    </Card>
  );
};
