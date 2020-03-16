import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';

const KeySpecificationObj = { brand: 'Brand', city: 'City', province: 'Province', taxClearance: 'Tax Clearance', customerType: 'Customer Type' };

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

const KeySpecification = ({ obj, showEnquiryForm }) => {
  return (
    <div className="detail-compare">
      <div className="name-price-compare">
        <div className="name-price" style={{ minWidth: 200 }}>
          <span style={{ fontSize: 20 }}>{obj.model}</span>
          <br />
          <span style={{ fontWeight: 100, color: '#ff4202', fontStyle: 'italic' }}>
            {`Price: NRs. ${obj.expectedPrice}`}
          </span>
        </div>
      </div>
      <div className="key-specification">
        {/* <span style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>Key Specifications</span> */}
        <br />
        <br />
        {Object.values(KeySpecificationObj).map((label, idx) => keySpecificationsElement(label, Object.keys(KeySpecificationObj)[idx], obj))}
      </div>
      <div style={{ width: '100%', textAlign: 'center', padding: 10 }}>
        <Button text="Enquiry" intent="success" fill onClick={showEnquiryForm} />
      </div>
    </div>
  );
};

export default KeySpecification;

KeySpecification.propTypes = {
  obj: PropTypes.objectOf(PropTypes.any).isRequired,
  showEnquiryForm: PropTypes.func.isRequired,
};
