import axios from 'axios';
import { updateFormValue } from '../index';
import { updateMainValue } from '../updateMainValue';
import { ENDPOINT } from '../../config';

export default async (dispatch, getState, schema) => {
  dispatch(updateFormValue(schema, { loading: true }));
  const { form } = getState();
  const { userName, password } = form.login;
  try {
    const res = await axios.post(`${ENDPOINT}auth/login`, { userName, password });
    const { data } = res;
    // console.log('current user details after login', data);
    if (res.status === 200 && data.token) {
      dispatch(updateFormValue(schema, { loading: false, error: null, success: true, userName: '', password: '' }));
      sessionStorage.setItem('USER_ID', data.id); //eslint-disable-line
      sessionStorage.setItem('SESSION_ID', data.token); //eslint-disable-line
      sessionStorage.setItem('USER_NAME', data.name); //eslint-disable-line
      sessionStorage.setItem('USER_TYPE', data.type); //eslint-disable-line
      sessionStorage.setItem('USER_EMAIL', data.email); //eslint-disable-line
      dispatch(updateMainValue('currentUserDetails', data));
      dispatch(updateMainValue('screen', data.type));
      dispatch(updateMainValue('pendingQuestion', data.pendingQuestion));
      if (data.type === 'admin' || data.type === 'super') {
        dispatch(updateMainValue('currentAdminContent', 'Reports'));
      } else {
        dispatch(updateMainValue('currentAdminContent', 'pendingQuestion'));
      }
    }
  } catch {
    dispatch(updateFormValue(schema, { loading: false, error: 'Invalid username/password' }));
  }
};
