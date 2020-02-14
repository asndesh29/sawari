import React from 'react';
import { ENDPOINT } from '../../../../config';
import KeySpecification from './KeySpecification';
import Slider from '../../../common/Slider';
import OverView from './Overview';

export default (props) => {
  const { main, showEnquiryForm, currentUsedVehicleDetails } = props;
  const data = [
    currentUsedVehicleDetails.image1,
    currentUsedVehicleDetails.image2,
    currentUsedVehicleDetails.image3,
    currentUsedVehicleDetails.image4,
    currentUsedVehicleDetails.image5,
  ].filter((im) => im).map((i) => `${ENDPOINT}/images/${i}`);
  return (
    <div className="keyspecification-overview" style={{ width: '100%' }}>
      <div className="detail-image-compare" style={{ width: '100%' }}>
        <div className="detail-image" style={{ width: '80%' }}>
          {/* <img src={`${ENDPOINT}/images/${currentUsedVehicleDetails.image1}`} alt={currentUsedVehicleDetails.vehicleName} /> */}
          <Slider
            data={data}
          />
        </div>
        <KeySpecification obj={currentUsedVehicleDetails} showEnquiryForm={showEnquiryForm} />
      </div>
      <div style={{ height: 1, width: '100%', background: '#f1f1f1' }} />
      <OverView {...props} currentUsedVehicleDetails={currentUsedVehicleDetails} />
      <div style={{ height: 1, width: '100%', background: '#f1f1f1' }} />
    </div>
  );
};
