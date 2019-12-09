import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateMainValue } from '../updateMainValue';

export default (id) => async (dispatch, getState) => {
  try {
    console.log('fetch initial admin data called');
    const resData = await axios.get(`${ENDPOINT}/web/fetch-product-details/?id=${id}`);
    console.log('initial admin data res', resData);
    if (resData.status === 200) {
      dispatch(updateMainValue('currentCarDetail', resData.data));
    }
  } catch (e) {
    console.error('error in fechting product details', e);
  }
};
