/* eslint-disable import/no-cycle */
import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';
import { updateMainValue } from '../updateMainValue';

const addStore = (dispatch, main, record, data) => {
  // console.log('add store value', dispatch, main, record, data);
  dispatch(updateMainValue('initialAdminData', {...main.initialAdminData, dealerList: [...main.initialAdminData.dealerList, { ...record, id: data.res, ...data }] }));
};

const updateStore = (dispatch, main, id, record, data) => {
  // console.log('update store', dispatch, main, id, record, data);
  dispatch(updateMainValue('initialAdminData', { ...main.initialAdminData, dealerList: main.initialAdminData.dealerList.map(vb => vb.id === id ? data : vb ) }));
};

export default async (dispatch, getstate, schema) => {
  // console.log('add Brand', schema);
  const { form, main } = getstate();
  const { addDealer } = form;
  const {
    image, stypeId, sId, name, city, latitude, logitude, description, id, sbId, phoneNo, province, type, email,
  } = addDealer;
  // console.log('type of image', typeof image);

  if (!name || !stypeId || !city || !description || !phoneNo || !sbId) {
    dispatch(updateFormValue(schema, { error: 'Please fill all the fields' }));
  } else {
    dispatch(updateFormValue(schema, { loading: false, error: '', success: '' }));
    dispatch(updateFormValue(schema, { loading: true }));
    try {
      const token = await sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
      let updateRes = null;
      if (typeof image === 'string') {
        // console.log('post if no image select');
        updateRes = await axios.post(`${ENDPOINT}/web/add-dealer`, { email, province, type, token, id, image, sbId, stypeId, sId, name, city, latitude, logitude, description, phoneNo });
      } else {
        // console.log('post if image selected');
        const formData = new FormData(); //eslint-disable-line
        formData.append('token', token);
        formData.append('name', name);
        formData.append('stypeId', stypeId);
        formData.append('sId', sId);
        formData.append('sbId', sbId);
        formData.append('city', city);
        formData.append('latitude', latitude);
        formData.append('logitude', logitude);
        formData.append('description', description);
        formData.append('phoneNo', phoneNo);
        formData.append('image', image);
        formData.append('province', province);
        formData.append('type', type);
        formData.append('email', email);
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
          url: `${ENDPOINT}/web/add-dealer`,
          data: formData,
        });
      }
      // console.log('add brand res', updateRes);
      if (updateRes.status === 200) {
        // console.log('update res', updateRes.data);
        dispatch(updateFormValue(schema, { error: '', loading: false, success: 'Dealer successfully updated' }));
        if (id && id !== 'undefined') {
          updateStore(dispatch, main, parseInt(id, 10), { image, stypeId, sId, name, city, latitude, logitude, description, id, sbId, phoneNo }, updateRes.data);
        } else {
          addStore(dispatch, main, { image, stypeId, sId, name, city, latitude, logitude, description, id, sbId, phoneNo }, updateRes.data);
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
