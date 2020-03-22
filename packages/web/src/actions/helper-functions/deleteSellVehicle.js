/* eslint-disable import/no-cycle */
import axios from 'axios';
import { updateMainValue } from '../index';
import { ENDPOINT } from '../../config';

const deleteBrand = (getState, id) => getState.main.initialAdminData.SellVehicle.filter(data => data.id !== id); //eslint-disable-line

export default (id) => async (dispatch, getState) => {
  // console.log('Sell vehicle called', id);
  try {
    const token = await sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
    const userRes = await axios.get(`${ENDPOINT}/web/delete-sell-vehicle?id=${id}&token=${token}`);
    if (userRes.status === 200) {
      dispatch(updateMainValue('initialAdminData', { ...getState().main.initialAdminData, SellVehicle: deleteBrand(getState(), id) }));
      return true;
    }
  } catch (e) {
    return false;
  }
};
