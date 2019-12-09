import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';

export default async (dispatch, getState, schema) => {
  console.log('add equry form called');
  try {
    const { form, main } = getState();

    const { name, email, message, phoneno, address } = form.addEnquiry;
    const pId = main.currentCarDetail.id;
    if (!name || !email || !message || !phoneno || !address) {
      dispatch(updateFormValue(schema, { error: 'Please fill all the field' }));
    } else {
      dispatch(updateFormValue(schema, { loading: true, error: null, success: null }));
      const enquiryRes = await axios.post(`${ENDPOINT}/web/add-enquiry`, { name, email, message, phoneno, address, pId });
      console.log('enquiry res', enquiryRes);
      if (enquiryRes.status === 200) {
        dispatch(updateFormValue(schema, { name: '', email: '', phoneno: '', message: '', address: '', loading: false, success: 'Enquiry submitted successfully we will contact you soon. Thank you!', error: null }));
      }
    }
  } catch (e) {
    dispatch(updateFormValue(schema, { loading: null, success: null, error: 'faild to summit enquiry! Try again' }));
    console.error('error in enquiry');
  }
};
