import axios from 'axios';
import { UPDATE_MAIN_VALUE } from './types';
import { ENDPOINT } from '../config';
import { updateFormValue } from './formHandler';

export const updateMainValue = (key, value) => async dispatch => dispatch(
  {
    type: UPDATE_MAIN_VALUE,
    payload: { key, value },
  }
);

export const fetchInitialData = () => async (dispatch, getState) => {
  console.log('fetch initial data called');
  const resData = await axios.get(`${ENDPOINT}/web/fetch-initial-data`);
  console.log('initial data res', resData);
  if (resData.status === 200) {
    dispatch(updateMainValue('initialData', resData.data));
  }
};
