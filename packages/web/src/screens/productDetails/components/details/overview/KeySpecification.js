import React from 'react';
import { Button } from '@blueprintjs/core';

const priceRangeHandler = (obj) => {
  const { varients } = obj;
  const minPrice = Math.min(...varients.map((v) => v.exShowRoomPrice));
  const maxPrice = Math.max(...varients.map((v) => v.exShowRoomPrice));
  return `NRs. ${minPrice} - ${maxPrice}/-`;
};

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

export default ({ obj, showEnquiryForm, variantId, compareButtonHandler }) => {
  // console.log('obj in key spcification', obj, variantId);
  const variant = obj.varients.find((v) => v.id === variantId);
  return (
    <div className="detail-compare">
      <div className="name-price-compare">
        <div className="name-price">
          <span style={{ fontSize: 20 }}>{variant.name}</span>
          <br />
          <span style={{ color: '#ff4202', fontStyle: 'italic' }}>{`Ex-Showroom Price: NRs. ${variant.exShowRoomPrice}/-`} </span>
          <br />
          <span style={{ color: '#ff4202', fontStyle: 'italic' }}>{`On Road Price: NRs: ${variant.exShowRoomPrice}/-`} </span>
        </div>
        <Button text="compare" onClick={() => compareButtonHandler(variant, obj.stypeId)} />
      </div>
      {/* <div className="key-specification">
        <span style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>Key Specifications</span>
        <br />
        <br />
        {Object.values(obj.labels).map((label, idx) => keySpecificationsElement(label, Object.keys(obj.labels)[idx], obj))}
      </div> */}
      <div style={{ width: '100%', textAlign: 'center', padding: 10 }}>
        <Button text="Enquiry" intent="success" fill onClick={showEnquiryForm} />
      </div>
    </div>
  );
};
