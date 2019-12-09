/* eslint-disable import/no-cycle */
import { UPDATE_FORM_VALUE } from './types';
import loginHandler from './helper-functions/loginHandler';
import addBrand from './helper-functions/addBrand';
import addProduct from './helper-functions/addProduct';
import addEnquiry from './helper-functions/addEnquiry';
import multiSearch from './helper-functions/multiSelectSearch';
import addDealer from './helper-functions/addDealer';
import addServiceCenter from './helper-functions/addServiceCenter';

export const updateFormValue = (schema, data) => async dispatch => dispatch({
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
    case 'addProduct':
      addProduct(dispatch, getState, schema);
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
    default:
      return null;
  }
};
