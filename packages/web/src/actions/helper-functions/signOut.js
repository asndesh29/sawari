import axios from 'axios';
import { updateMainValue, updateFormValue } from '../index';
import { ENDPOINT } from '../../config';

export default () => async (dispatch, getState) => {
  dispatch(updateMainValue('signOutError', null));
  dispatch(updateMainValue('signOutLoading', true));
  dispatch(updateMainValue('showSignout', true));
  const token = sessionStorage.getItem('SESSION_ID');
  try {
    const { currentServeStatus } = getState().main;
    const { translatorDetails } = getState().main;
    const registrationToken = translatorDetails.userQuestion ? translatorDetails.userQuestion.userQuestion.registrationToken : null;
    const { pendingQuestionList } = getState().main;
    let pendigQuestionFinalList = [];
    if (pendingQuestionList.length > 0) {
      pendigQuestionFinalList = pendingQuestionList.map(obj => ({ registrationToken: obj.translatorDetails.userQuestion.userQuestion.registrationToken, currentServeStatus: obj.serveStatus }));
    }
    const res = await axios.post(`${ENDPOINT}auth/logout`, { token, registrationToken, pendingQuestionList: pendigQuestionFinalList, currentServeStatus });
    dispatch(updateMainValue('signOutLoading', false));
    // console.log('sing out res', res);
    if (res.status === 200) {
      await sessionStorage.removeItem('SESSION_ID'); //eslint-disable-line
      await sessionStorage.removeItem('USER_TYPE'); //eslint-disable-line
      dispatch(updateMainValue('screen', 'login'));
      dispatch(updateMainValue('currentAdminContent', null));
      dispatch(updateMainValue('currentUserDetails', null));
      dispatch(updateMainValue('currentServeStatus', null));
      dispatch(updateMainValue('currentQuestionDetails', {}));
      dispatch(updateMainValue('translatorDetails', {}));
      dispatch(updateFormValue('addProfileDetails', {
        name: '', gender: '', experience: '', qualification: '', phoneNo: '', image: '', success: null, loading: null, error: null,
      }));
      dispatch(updateMainValue('showSignout', false));
    }
  } catch (e) {
    dispatch(updateMainValue('signOutLoading', false));
    dispatch(updateMainValue('signOutError', 'Sign out faild'));
    console.log('error in signout', e);
    throw e;
  }
};
