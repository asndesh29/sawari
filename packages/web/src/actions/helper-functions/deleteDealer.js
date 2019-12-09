import axios from 'axios';
import { updateMainValue } from '../index';
import { ENDPOINT } from '../../config';

const deleteBrand = (getState, id) => getState.main.initialAdminData.dealerList.filter(data => data.id !== id); //eslint-disable-line

export default (id) => async (dispatch, getState) => {
  try {
    const token = await sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
    const userRes = await axios.get(`${ENDPOINT}/web/delete-dealer?id=${id}&token=${token}`);
    if (userRes.status === 200) {
      dispatch(updateMainValue('initialAdminData', { ...getState().main.initialAdminData, dealerList: deleteBrand(getState(), id) }));
      return true;
    }
  } catch (e) {
    return false;
  }
};
