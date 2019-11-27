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
  const token = sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
  const type = sessionStorage.getItem('USER_TYPE'); //eslint-disable-line
  if (token) {
    const resData = await axios.get(`${ENDPOINT}web/fetch-initial-data?token=${token}`);
    // console.log('initial data res', resData);
    if (resData.status === 200) {
      dispatch(updateMainValue('currentUserDetails', resData.data.currentUserDetails));
      dispatch(updateMainValue('initialData', resData.data));
      if (type === 'admin' || type === 'super') {
        dispatch(updateFormValue('appConfiguration',
          {
            questionRate: resData.data.appConfig ? resData.data.appConfig.questionRate : '',
            initialMessage: resData.data.appConfig ? resData.data.appConfig.initialMessage : '',
            freeQuestionRound: resData.data.appConfig ? resData.data.appConfig.freeQuestionRound : '',
          }));
        dispatch(updateFormValue('saveEmployeeSalary', resData.data.employeeSalary));
        dispatch(updateMainValue('pendingQuestion', resData.data.pendingQuestion));
        dispatch(updateFormValue('addProfileDetails', { ...getState().form.addProfileDetails, ...resData.data.currentUserDetails.userDetails }));
      }
    }
  }
};
