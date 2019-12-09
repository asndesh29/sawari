/* eslint-disable import/no-cycle */
import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';
import { updateMainValue } from '../updateMainValue';

const addStore = (dispatch, main, record, data) => {
  // console.log('add store value', dispatch, main, record, data);
  dispatch(updateMainValue('initialAdminData', {...main.initialAdminData, vehicleBrand: [...main.initialAdminData.vehicleBrand, { ...record, id: data.res, ...data }] }));
};

const updateStore = (dispatch, main, id, record, data) => {
  // console.log('update store', dispatch, main, id, record, data);
  dispatch(updateMainValue('initialAdminData', { ...main.initialAdminData, vehicleBrand: main.initialAdminData.vehicleBrand.map(vb => vb.id === id ? data : vb ) }));
};

export default async (dispatch, getstate, schema) => {
  // console.log('add Brand', schema);
  const { form, main } = getstate();
  const { addBrand } = form;
  const {
    image, stypeId, sid, brandName, id,
  } = addBrand;
  // console.log('type of image', typeof image);

  if (brandName === '' || stypeId === '' || image === '' || sid === '') {
    dispatch(updateFormValue(schema, { error: 'Please fill all the fields' }));
  } else {
    dispatch(updateFormValue(schema, { loading: false, error: '', success: '' }));
    dispatch(updateFormValue(schema, { loading: true }));
    try {
      const token = await sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
      let updateRes = null;
      if (typeof image === 'string') {
        // console.log('post if no image select');
        updateRes = await axios.post(`${ENDPOINT}/web/add-brand`, { token, brandName, image, sid, stypeId, id });
      } else {
        // console.log('post if image selected');
        const formData = new FormData(); //eslint-disable-line
        formData.append('token', token);
        formData.append('brandName', brandName);
        formData.append('stypeId', stypeId);
        formData.append('sid', sid);
        formData.append('image', image);
        if (id && id !== 'undefined') {
          formData.append('id', id);
        }
        updateRes = await axios({
          config: {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
          method: 'post',
          url: `${ENDPOINT}/web/add-brand`,
          data: formData,
        });
      }
      // console.log('add brand res', updateRes);
      if (updateRes.status === 200) {
        // console.log('update res', updateRes.data);
        dispatch(updateFormValue(schema, { error: '', loading: false, success: 'Brand successfully updated' }));
        if (id && id !== 'undefined') {
          updateStore(dispatch, main, parseInt(id, 10), { brandName, image, sid, stypeId, id }, updateRes.data);
        } else {
          addStore(dispatch, main, { brandName, image, sid, stypeId, id }, updateRes.data);
        }
        // dispatch(updateMainValue('currentUserDetails', { ...main.currentUserDetails, userDetails: updateRes.data }));
        // updateStoreValue(dispatch, main, form, updateRes.data);
      }
    } catch (e) {
      // console.log('update profile error', e);
      dispatch(updateFormValue(schema, { error: 'Faild to update details try again', loading: false }));
    }
  }
};
