/* eslint-disable import/no-cycle */
import axios from 'axios';
import { updateMainValue } from '../index';
import { ENDPOINT } from '../../config';

const deleteBrand = (getState, id) => getState.main.initialAdminData.vehicleVarientList.filter(data => data.id !== id); //eslint-disable-line

export default (obj) => async (dispatch, getState) => {
  try {
    const token = await sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
    const userRes = await axios.get(`${ENDPOINT}/web/delete-varient?id=${obj.id}&token=${token}&stypeId=${obj.stypeId}`);
    if (userRes.status === 200) {
      dispatch(updateMainValue('initialAdminData', { ...getState().main.initialAdminData, vehicleVarientList: deleteBrand(getState(), obj.id) }));
      return true;
    }
  } catch (e) {
    return false;
  }
};
