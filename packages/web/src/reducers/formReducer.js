import { UPDATE_FORM_VALUE } from '../actions/types';

const initialFormState = {
  login: {
    userName: '', password: '', error: null, success: null, loading: null,
  },
  multiSearch: {
    searchType: 'budget', buttonType: 'new', typeId: null, brandId: null, productId: null, error: null, success: null, loading: null,
  },
  addEnquiry: {
    name: '', email: '', phoneno: '', address: '', message: '', error: null, success: null, loading: null,
  },
  addBrand: {
    stypeId: null, brandName: null, image: null, sid: 1, loading: null, error: null, success: null,
  },
  addModel: {
    stypeId: null, name: null, image: null, sid: 1, loading: null, error: null, success: null,
  },
  sendEmail: {
    email: null, message: null, success: null, error: null, loading: null,
  },
  ServiceTypeBrandModelVarient: {
    sid: 1,
    stypeId: null,
    sbId: null,
    modelId: null,
    name: null,
    onRoadPrice: null,
    exShowRoomPrice: null,
    bodyType: null,
    error: null,
    loading: null,
    success: null,
  },
  CarVarientOverview: {
    varientId: null,
    mileage: null,
    engine: null,
    BHP: null,
    transmission: null,
    seats: null,
    serviceCost: null,
    error: null,
    loading: null,
    success: null,
  },
  CarVarientKeySpecification: {
    loading: null,
    error: null,
    success: null,
  },
  CarVarientKeyFeatures: {
    loading: null,
    error: null,
    success: null,
  },
  CarVarientEngineTransmission: {
    loading: null,
    error: null,
    success: null,
  },
  CarVarientFuelPerformance: {
    loading: null,
    error: null,
    success: null,
  },
  CarVarientSuspensionSteeringBreak: {
    loading: null,
    error: null,
    success: null,
  },
  CarVarientDimentionCapacity: {
    loading: null,
    error: null,
    success: null,
  },
  CarVarientComfortConvenience: {
    loading: null,
    error: null,
    success: null,
  },
  CarVarientInterior: {
    loading: null,
    error: null,
    success: null,
  },
  CarVarientExterior: {
    loading: null,
    error: null,
    success: null,
  },
  CarVarientSafty: {
    loading: null,
    error: null,
    success: null,
  },
  CarVarientEntertainmentCommunication: {
    loading: null,
    error: null,
    success: null,
  },

  BikeVarientOverview: {
    loading: null,
    success: null,
    error: null,
  },
  BikeVarientKeySpecification: {
    loading: null,
    success: null,
    error: null,
  },
  BikeVarientKeyFeaturs: {
    loading: null,
    success: null,
    error: null,
  },
  BikeVarientEngineTransmission: {
    loading: null,
    success: null,
    error: null,
  },
  BikeVarientFeatursSafety: {
    loading: null,
    success: null,
    error: null,
  },
  BikeVarientMileagePerformance: {
    loading: null,
    success: null,
    error: null,
  },
  BikeVarientChassisSuspension: {
    loading: null,
    success: null,
    error: null,
  },
  BikeVarientDimensionCapacity: {
    loading: null,
    success: null,
    error: null,
  },
  BikeVarientElectricals: {
    loading: null,
    success: null,
    error: null,
  },
  BikeVarientTyresBrakes: {
    loading: null,
    success: null,
    error: null,
  },
  DiscountOffer: {
    loading: null,
    success: null,
    error: null,
  },

  addDealer: {
    province: null, type: null, sId: 1, name: null, phoneNo: null, description: null, latitude: null, city: null, logitude: null, loading: null, error: null, success: null,
  },
  addServiceCenter: {
    province: null, type: null, sId: 1, name: null, phoneNo: null, description: null, latitude: null, city: null, logitude: null, loading: null, error: null, success: null,
  },
  sellVehicle: {
    stypeId: null, sbId: null, vehicleName: null, kmsDriven: null, ownerShip: null, city: null, expectedPrice: null, ownerName: null, ownerEmail: null, ownerPhoneNo: null, image1: null, image2: null, image3: null, image4: null, image5: null, loading: null, success: null, error: null,
  },
  dealerEnquiry: {
    name: '', email: '', phoneno: '', address: '', message: '', dealerId: null, error: null, success: null, loading: null,
  },
  serviceCenterEnquiry: {
    name: '', email: '', phoneno: '', address: '', message: '', error: null, success: null, loading: null,
  },
  sellVehicleFilter: {

  },

  User: {
    loading: null, success: null, error: null,
  },
  Videos: {
    loading: null, success: null, error: null,
  },
  News: { loading: null, success: null, error: null },
};

export default (state = initialFormState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE:
      return {
        ...state,
        [action.payload.schema]: {
          ...state[action.payload.schema], ...action.payload.data,
        },
      };
    default:
      return state;
  }
};
