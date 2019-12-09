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
  sendEmail: {
    email: null, message: null, success: null, error: null, loading: null,
  },
  addProduct: {
    sid: 1,
    stypeId: null,
    sbId: null,
    userId: null,
    name: null,
    image: null,
    price: null,
    displacement: null,
    power: null,
    torque: null,
    markNew: null,
    markPopular: null,
    offer: null,
    fueltankCapacity: null,
    tyre: null,
    groundClearance: null,
    battery: null,
    availableColor: null,
    error: null,
    loading: null,
    success: null,
  },
  addDealer: {
    sId: 1, name: null, phoneNo: null, description: null, latitude: null, city: null, logitude: null, loading: null, error: null, success: null,
  },
  addServiceCenter: {
    sId: 1, name: null, phoneNo: null, description: null, latitude: null, city: null, logitude: null, loading: null, error: null, success: null,
  },
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
