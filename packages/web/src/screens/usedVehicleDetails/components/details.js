import React from 'react';
import { ENDPOINT } from '../../../config';

export default (props) => {
  console.log('details in car deails', props);
  const { main } = props;
  const { currentUsedVehicleDetails } = main;
  return (
    <div className="image-details">
      <img src={`${ENDPOINT}/images/${currentUsedVehicleDetails.image1}`} alt={currentUsedVehicleDetails.vehicleName} />
      <div className="details">
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Name:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentUsedVehicleDetails.vehicleName}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Price:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentUsedVehicleDetails.expectedPrice}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          KMs Driven:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentUsedVehicleDetails.kmsDriven}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Phone No:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentUsedVehicleDetails.ownerPhoneNo}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Ownership:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentUsedVehicleDetails.ownerShip}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          City:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentUsedVehicleDetails.city}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Phone No:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentUsedVehicleDetails.ownerPhoneNo}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Email:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentUsedVehicleDetails.ownerEmail}
          </span>
        </span>
        <br />
      </div>
    </div>
  );
};
