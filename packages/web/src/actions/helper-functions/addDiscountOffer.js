/* eslint-disable import/no-cycle */
import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';
import { updateMainValue } from '../updateMainValue';

const addStore = (dispatch, main, record, data) => {
  console.log('add store value', dispatch, main, record, data);
  dispatch(updateMainValue('initialAdminData', {...main.initialAdminData, DiscountOffer: [...main.initialAdminData.DiscountOffer, { ...record, id: data.res, ...data }] }));
};

const updateStore = (dispatch, main, id, record, data) => {
  console.log('update store', dispatch, main, id, record, data);
  // eslint-disable-next-line no-confusing-arrow
  dispatch(updateMainValue('initialAdminData', { ...main.initialAdminData, DiscountOffer: main.initialAdminData.DiscountOffer.map((vb) => vb.id === id ? data : vb ) }));
};

export default async (dispatch, getstate, schema) => {
  console.log('add discount offer called', schema);
  const { form, main } = getstate();
  const variantId = main.varientId;
  const {
    image, status, message, priceDiscount, id,
  } = form[schema];
  // console.log('type of image', typeof image);

  if (message === '' || image === '' || status === '') {
    dispatch(updateFormValue(schema, { error: 'Please fill all the fields' }));
  } else {
    dispatch(updateFormValue(schema, { loading: false, error: '', success: '' }));
    dispatch(updateFormValue(schema, { loading: true }));
    try {
      const token = await sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
      let updateRes = null;
      if (typeof image === 'string') {
        // console.log('post if no image select');
        updateRes = await axios.post(`${ENDPOINT}/web/add-discount-offer`, { id, image, message, priceDiscount, status, token, variantId });
      } else {
        // console.log('post if image selected');
        const formData = new FormData(); //eslint-disable-line
        formData.append('token', token);
        formData.append('status', status);
        formData.append('variantId', variantId);
        formData.append('message', message);
        formData.append('image', image);
        formData.append('priceDiscount', priceDiscount);
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
          url: `${ENDPOINT}/web/add-discount-offer`,
          data: formData,
        });
      }
      // console.log('add brand res', updateRes);
      if (updateRes.status === 200) {
        // console.log('update res', updateRes.data);
        dispatch(updateFormValue(schema, { error: '', loading: false, success: 'Model successfully updated' }));
        if (id && id !== 'undefined') {
          updateStore(dispatch, main, parseInt(id, 10), { status, image, message, priceDiscount, id, variantId }, updateRes.data);
        } else {
          addStore(dispatch, main, { status, image, message, priceDiscount, id, variantId }, updateRes.data);
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
