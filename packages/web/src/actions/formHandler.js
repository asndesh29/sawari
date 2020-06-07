/* eslint-disable import/no-cycle */
import { UPDATE_FORM_VALUE } from './types';
import loginHandler from './helper-functions/loginHandler';
import addBrand from './helper-functions/addBrand';
import addProduct from './helper-functions/addProduct';
import addEnquiry from './helper-functions/addEnquiry';
import multiSearch from './helper-functions/multiSelectSearch';
import addDealer from './helper-functions/addDealer';
import addServiceCenter from './helper-functions/addServiceCenter';
import addSellVhicle from './helper-functions/addSellVehicle';
import addDealerEnquiry from './helper-functions/addDealerEnquiry';
import addServiceCenterEnquiry from './helper-functions/addServiceCenterEnquiry';
import addModel from './helper-functions/addModel';
import addVarient from './helper-functions/addVarient';
import addDiscountOffer from './helper-functions/addDiscountOffer';
import addUpdateUser from './helper-functions/addUpdateUser';
import addAndUpdateVideos from './helper-functions/addAndUpdateVideos';
import sendEmail from './helper-functions/sendEmail';

const arrBike = [
  'BikeVarientOverview',
  'BikeVarientKeySpecification',
  'BikeVarientKeyFeaturs',
  'BikeVarientEngineTransmission',
  'BikeVarientFeatursSafety',
  'BikeVarientMileagePerformance',
  'BikeVarientChassisSuspension',
  'BikeVarientDimensionCapacity',
  'BikeVarientElectricals',
  'BikeVarientTyresBrakes',
];

export const updateFormValue = (schema, data) => async (dispatch) => dispatch({
  type: UPDATE_FORM_VALUE,
  payload: { schema, data },
});

export const submitFormHandler = schema => async (dispatch, getState) => {
  console.log('form handler called', schema);
  switch (schema) {
    case 'login':
      loginHandler(dispatch, getState, schema);
      break;
    case 'addBrand':
      addBrand(dispatch, getState, schema);
      break;
    case 'addModel':
      addModel(dispatch, getState, schema);
      break;
    case 'ServiceTypeBrandModelVarient':
    case 'CarVarientOverview':
    case 'CarVarientKeySpecification':
    case 'CarVarientKeyFeatures':
    case 'CarVarientEngineTransmission':
    case 'CarVarientFuelPerformance':
    case 'CarVarientSuspensionSteeringBreak':
    case 'CarVarientDimentionCapacity':
    case 'CarVarientComfortConvenience':
    case 'CarVarientInterior':
    case 'CarVarientExterior':
    case 'CarVarientSafty':
    case 'CarVarientEntertainmentCommunication':
    case 'BikeVarientOverview':
    case 'BikeVarientKeySpecification':
    case 'BikeVarientKeyFeaturs':
    case 'BikeVarientEngineTransmission':
    case 'BikeVarientFeatursSafety':
    case 'BikeVarientMileagePerformance':
    case 'BikeVarientChassisSuspension':
    case 'BikeVarientDimensionCapacity':
    case 'BikeVarientElectricals':
    case 'BikeVarientTyresBrakes':
      addVarient(dispatch, getState, schema);
      break;
    case 'DiscountOffer':
      addDiscountOffer(dispatch, getState, schema);
      break;
    case 'addEnquiry':
      addEnquiry(dispatch, getState, schema);
      break;
    case 'multiSearch':
      multiSearch(dispatch, getState, schema);
      break;
    case 'addDealer':
      addDealer(dispatch, getState, schema);
      break;
    case 'addServiceCenter':
      addServiceCenter(dispatch, getState, schema);
      break;
    case 'sellVehicle':
      addSellVhicle(dispatch, getState, schema);
      break;
    case 'dealerEnquiry':
      addDealerEnquiry(dispatch, getState, schema);
      break;
    case 'serviceCenterEnquiry':
      addServiceCenterEnquiry(dispatch, getState, schema);
      break;
    case 'User':
      addUpdateUser(dispatch, getState, schema);
      break;
    case 'Videos':
      addAndUpdateVideos(dispatch, getState, schema);
      break;
    case 'sendEmail':
      sendEmail(dispatch, getState, schema);
      break;
    default:
      return null;
  }
};
