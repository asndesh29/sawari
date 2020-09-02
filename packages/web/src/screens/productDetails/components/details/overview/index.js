import React from 'react';
import { ENDPOINT } from '../../../../../config';
import productDetailsObj from '../productDetailsObj';
import KeySpecification from './KeySpecification';
import OverView from './Overview';
import Slider from '../../image-slider';

export default (props) => {
  const { main, showEnquiryForm, currentProductDetails, variantId, compareButtonHandler } = props;

  return (
    <div className="keyspecification-overview" >
      <div className="detail-image-compare" > {
        /* <div className="detail-image">
                  <img src={`${ENDPOINT}/model_image/${currentProductDetails.image}`} alt={currentProductDetails.name} />
                </div> */
      } <div className="row">
          <div className="col-md-7" >
            <Slider data={`${ENDPOINT}/model_image/${currentProductDetails.image}`} />
          </div>
          <div className="col-md-5">
            <KeySpecification compareButtonHandler={compareButtonHandler} obj={currentProductDetails} showEnquiryForm={showEnquiryForm} variantId={variantId} />
          </div >
        </div>
      </div >

      <div className="overview-container">
        <h3> Key Specification </h3>
        <OverView {...props} />
      </div>
    </div>
  );
};