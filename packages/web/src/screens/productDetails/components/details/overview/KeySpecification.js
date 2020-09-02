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
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <h3 className="title">{variant.name}</h3>
            <br />
            <Button text="Compare" onClick={() => compareButtonHandler(variant, obj.stypeId)} />
          </div>
          <div className="prices">
            <h4>Ex-Showroom Price: <span>रु. {`${variant.exShowRoomPrice / 100000}`} लाख</span> </h4>
            <h4>On Road Price: <span>रु. {`${variant.onRoadPrice / 100000}`} लाख</span> </h4>
          </div>
        </div>
      </div>
      {/* <div className="key-specification">
        <span style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>Key Specifications</span>
        <br />
        <br />
        {Object.values(obj.labels).map((label, idx) => keySpecificationsElement(label, Object.keys(obj.labels)[idx], obj))}
      </div> */}
      <div className="enquiry_btn">
        <Button text="Enquiry" onClick={showEnquiryForm} />
      </div>
    </div>
  );
};
