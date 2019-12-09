import axios from 'axios';
import { updateMainValue, updateFormValue } from '../index';
import { ENDPOINT } from '../../config';

export default () => async (dispatch, getState) => {
  dispatch(updateMainValue('signOutError', null));
  dispatch(updateMainValue('signOutLoading', true));
  dispatch(updateMainValue('showSignout', true));
  const token = sessionStorage.getItem('SESSION_ID');
  try {
    const res = await axios.post(`${ENDPOINT}/auth/logout`, { token });
    dispatch(updateMainValue('signOutLoading', false));
    // console.log('sing out res', res);
    if (res.status === 200) {
      await sessionStorage.removeItem('SESSION_ID'); //eslint-disable-line
      await sessionStorage.removeItem('USER_TYPE'); //eslint-disable-line
      dispatch(updateMainValue('screen', 'login'));
      dispatch(updateMainValue('currentAdminContent', null));
      dispatch(updateMainValue('currentUserDetails', null));
      dispatch(updateMainValue('showSignout', false));
    }
  } catch (e) {
    dispatch(updateMainValue('signOutLoading', false));
    dispatch(updateMainValue('signOutError', 'Sign out faild'));
    console.log('error in signout', e);
    throw e;
  }
};
