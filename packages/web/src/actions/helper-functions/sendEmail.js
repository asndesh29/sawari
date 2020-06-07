/* eslint-disable import/no-cycle */
import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';

export default async (dispatch, getState, schema) => {
  console.log('send Email api called', schema);
  try {
    const { form, main } = getState();
    const token = await sessionStorage.getItem('SESSION_ID');
    const { email, message } = form[schema];
    if (!message || !email) {
      dispatch(updateFormValue(schema, { error: 'Please fill all the field' }));
    } else {
      dispatch(updateFormValue(schema, { loading: true, error: null, success: null }));
      const enquiryRes = await axios.post(`${ENDPOINT}/web/send-email`, { token, email, message });
      if (enquiryRes.status === 200) {
        dispatch(updateFormValue(schema, { info: '', loading: false, success: 'Send Email Success!', error: null }));
      }
    }
  } catch (e) {
    dispatch(updateFormValue(schema, { loading: null, success: null, error: 'faild to summit enquiry! Try again' }));
    console.error('error in send email', e);
  }
};
