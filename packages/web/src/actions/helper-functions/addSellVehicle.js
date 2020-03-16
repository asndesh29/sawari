/* eslint-disable import/no-cycle */
import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';

export default async (dispatch, getState, schema) => {
  console.log('add equry form called');
  try {
    const { form, main } = getState();

    const {
      stypeId,
      sbId,
      vehicleName,
      kmsDriven,
      ownerShip,
      city,
      expectedPrice,
      ownerName,
      ownerEmail,
      ownerPhoneNo,
      image1,
      image2,
      image3,
      image4,
      image5,
      model,
      variant,
      customerType,
      makeYear,
      displacement,
      province,
      taxClearance,
      registrationNo,
      id,
    } = form.sellVehicle;

    if (!stypeId || !sbId || !image1 || !kmsDriven || !ownerShip) {
      dispatch(updateFormValue(schema, { error: 'Please fill all the field' }));
    } else {
      dispatch(updateFormValue(schema, { loading: true, error: null, success: null }));
      const enquiryRes = await axios.post(`${ENDPOINT}/web/add-vehicle`,
        {
          stypeId,
          sbId,
          vehicleName,
          kmsDriven,
          ownerShip,
          city,
          expectedPrice,
          ownerName,
          ownerEmail,
          ownerPhoneNo,
          image1,
          image2,
          image3,
          image4,
          image5,
          model,
          variant,
          customerType,
          makeYear,
          displacement,
          province,
          taxClearance,
          registrationNo,
          id,
        });
      console.log('enquiry res', enquiryRes);
      if (enquiryRes.status === 200) {
        dispatch(updateFormValue(schema, {
          stypeId: null,
          sbId: null,
          vehicleName: null,
          kmsDriven: null,
          ownerShip: null,
          city: null,
          expectedPrice: null,
          ownerName: null,
          ownerEmail: null,
          ownerPhoneNo: null,
          image1: null,
          image2: null,
          image3: null,
          image4: null,
          image5: null,
          loading: false,
          success: 'Your vehicle will be listed soon. Thank you!',
          error: null,
          model: null,
          variant: null,
          customerType: null,
          makeYear: null,
          displacement: null,
          province: null,
          taxClearance: null,
          registrationNo: null,
        }));
      }
    }
  } catch (e) {
    dispatch(updateFormValue(schema, { loading: null, success: null, error: 'Faild to  add list vehicle! Try again' }));
    console.error('error in sell vehicle', e);
  }
};
