import React from 'react';
import { Card, Elevation, Icon, Button } from '@blueprintjs/core';
import { ENDPOINT } from '../../../../config';

const locateClickHandler = (obj) => {
  window.open(`https://www.google.com/maps/dir/Current+Location/${obj.latitude},${obj.logitude}`);
};

export default (obj, onEnqueryClickHandler, enquiryFomrmToggle) => {

  return (
    <Card
      className="product-card"
      // onClick={() => cardOnClickHandler(obj)}
    >
      <div className="image-container">
        <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.brandName} />
      </div>
      <div className="description">
        <span style={{ fontWeight: 100, fontSize: 20 }}>{obj.name}</span>
        <span style={{ fontWeight: 40, width: '70%' }}>{`${obj.description}`}</span>
        <div style={{ marginTop: 10, width: '100%' }}>
          <Icon icon="phone" style={{ marginRight: 10, color: 'green' }}/>
          <span>{obj.phoneNo}</span>
          <Icon icon="envelope" style={{ marginRight: 10, color: 'green', marginLeft: 10 }} />
          <span>sawarikinbech@gmail.com</span>
          <Button text="Locate" fill intent="success" style={{ marginTop: 10, width: 200 }} onClick={() => locateClickHandler(obj)}/>
          <Button text="Enquiry" fill intent="success" onClick={enquiryFomrmToggle} style={{ marginTop: 10, width: 200 }} />
        </div>
      </div>
    </Card>
  );
};
