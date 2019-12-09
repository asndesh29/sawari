import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateMainValue } from '../updateMainValue';

export default () => async (dispatch, getState) => {
  console.log('fetch initial admin data called');
  const resData = await axios.get(`${ENDPOINT}/web/fetch-admin-data`);
  console.log('initial admin data res', resData);
  if (resData.status === 200) {
    dispatch(updateMainValue('initialAdminData', resData.data));
  }
};
