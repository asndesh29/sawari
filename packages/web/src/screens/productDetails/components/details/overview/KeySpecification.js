import React from 'react';
import { Button } from '@blueprintjs/core';

const keySpecificationsElement = (label, key, obj) => {
  return (
    obj[key] && (
      <div style={{ width: '100%', paddingRight: 10 }}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginLeft: 5 }}>
          <span>{`${label}`}</span>
          <span>{`${obj[key]}`}</span>
        </div>
        <div style={{ height: 1, width: '100%', background: '#f5f5f5', marginBottom: 5 }} />
      </div>
    )
  );
};

export default ({ obj, showEnquiryForm }) => {
  console.log('obj in key spcification', obj);
  return (
    <div className="detail-compare">
      <div className="name-price-compare">
        <div className="name-price">
          <span style={{ fontSize: 20 }}>{obj.name}</span>
          <br />
          <span>{`NRs. ${obj.price}/-`}</span>
        </div>
        <Button text="compare" />
      </div>
      <div className="key-specification">
        <span style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>Key Specifications</span>
        <br />
        <br />
        {Object.values(obj.labels).map((label, idx) => keySpecificationsElement(label, Object.keys(obj.labels)[idx], obj))}
      </div>
      <div style={{ width: '100%', textAlign: 'center', padding: 10 }}>
        <Button text="Enquiry" intent="success" fill onClick={showEnquiryForm} />
      </div>
    </div>
  );
};
