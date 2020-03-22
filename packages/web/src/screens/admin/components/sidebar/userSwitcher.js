import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';

const sideNavStructure = { admin: [
  { text: 'Add User', tag: 'addUser' },
  { text: 'Product Enquiry', tag: 'enquiry' },
  { text: 'Dealer Enquiry', tag: 'dealerEnquiry' },
  { text: 'Service Center Enquiry', tag: 'serviceCenterEnquiry' },
  { text: 'Brand', tag: 'addBrand' },
  { text: 'Model', tag: 'addModel' },
  { text: 'Varient', tag: 'addProduct' },
  { text: 'Dealer', tag: 'dealer' },
  { text: 'Service Center', tag: 'serviceCenter' },
  { text: 'Used Product', tag: 'usedProduct' },
],

new: [
  { text: 'Brand', tag: 'addBrand' },
  { text: 'Model', tag: 'addModel' },
  { text: 'Varient', tag: 'addProduct' },
  { text: 'Dealer', tag: 'dealer' },
  { text: 'Service Center', tag: 'serviceCenter' },
],

used: [
  { text: 'Used Product', tag: 'usedProduct' },
],

both: [
  { text: 'Brand', tag: 'addBrand' },
  { text: 'Model', tag: 'addModel' },
  { text: 'Varient', tag: 'addProduct' },
  { text: 'Dealer', tag: 'dealer' },
  { text: 'Service Center', tag: 'serviceCenter' },
  { text: 'Used Product', tag: 'usedProduct' },
],
};

const UserSwitch = (props) => {
  const { type, main, updateMainValue } = props;
  return (
    <div>
      {sideNavStructure[type].map((sd) => (
        <Button
          text={sd.text}
          fill
          intent="primary"
          style={{ background: main.currentAdminContent === sd.tag ? 'blue' : 'yellow' }}
          onClick={() => updateMainValue('currentAdminContent', sd.tag)}
        />
      ))}
    </div>
  );
};

export default UserSwitch;

UserSwitch.propTypes = {
  type: PropTypes.string.isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
