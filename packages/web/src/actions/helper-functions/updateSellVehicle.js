import axios from 'axios';
import { updateMainValue } from '../index';
import { ENDPOINT } from '../../config';

const updateSellVehicle = (getState, record) => getState.main.initialAdminData.SellVehicle.map(data => data.id === record.id ? record : data); //eslint-disable-line

export default (record) => async (dispatch, getState) => {
  console.log('Update Sell Value called', record);
  try {
    const token = await sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
    const userRes = await axios.post(`${ENDPOINT}/web/add-vehicle`, record);
    if (userRes.status === 200) {
      dispatch(updateMainValue('initialAdminData', { ...getState().main.initialAdminData, SellVehicle: updateSellVehicle(getState(), record) }));
      return true;
    }
  } catch (e) {
    return false;
  }
};
