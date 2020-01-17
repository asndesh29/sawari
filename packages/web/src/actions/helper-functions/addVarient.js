/* eslint-disable import/no-cycle */
import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';
import { updateMainValue } from '../updateMainValue';

const addStore = (dispatch, main, record, data, schema, form) => {
  console.log('add store value', data, schema);
  if (schema === 'ServiceTypeBrandModelVarient') {
    dispatch(updateMainValue('initialAdminData', { ...main.initialAdminData, vehicleVarientList: [...main.initialAdminData.vehicleVarientList, { ...record, id: data.res }] }));
    dispatch(updateFormValue(schema, { ...form[schema], id: data.res }));
  } else {
    dispatch(updateMainValue('initialAdminData', { ...main.initialAdminData, [schema]: [...main.initialAdminData[schema], { ...record, id: data.res }] }));
    dispatch(updateFormValue(schema, { ...form[schema], id: data.res }));
  }
};

const updateStore = (dispatch, main, id, record, data, schema) => {
  // console.log('update store', dispatch, main, id, record, data);
  if (schema === 'ServiceTypeBrandModelVarient') {
    dispatch(updateMainValue('initialAdminData', { ...main.initialAdminData, vehicleVarientList: main.initialAdminData.vehicleVarientList.map(vb => vb.id === id ? data : vb ) }));
  } else {
    dispatch(updateMainValue('initialAdminData', { ...main.initialAdminData, [schema]: main.initialAdminData[schema].map(vb => vb.id === id ? data : vb ) }));
  }
};

export default async (dispatch, getState, schema) => {
  console.log('add varient called');
  try {
    const { form, main } = getState();
    const schemaFields = form[schema];
    let varientId;
    delete schemaFields.error;
    delete schemaFields.success;
    delete schemaFields.loading;
    if (schema !== 'ServiceTypeBrandModelVarient') {
      varientId = main.varientId;
    }
    const token = await sessionStorage.getItem('SESSION_ID');
    // console.log('schema and schema fields', schema, schemaFields);
    dispatch(updateFormValue(schema, { loading: true, error: null, success: null }));
    const addVarintRes = await axios.post(`${ENDPOINT}/web/add-varient`, { ...schemaFields, schema, token, varientId });
    console.log('add varient res', addVarintRes);
    if (addVarintRes.status === 200) {
      dispatch(updateFormValue(schema, { loading: false, success: 'Successfully Updated', error: null }));
      if (schemaFields.id && schemaFields.id !== 'undefined') {
        updateStore(dispatch, main, parseInt(schemaFields.id, 10), schemaFields, addVarintRes.data, schema);
      } else {
        dispatch(updateMainValue('varientId', addVarintRes.data.res));
        addStore(dispatch, main, schemaFields, addVarintRes.data, schema, form);
      }
    }
  } catch (e) {
    dispatch(updateFormValue(schema, { loading: null, success: null, error: 'Update faild! Try again' }));
    console.error('error in add Varient', e);
  }
};
