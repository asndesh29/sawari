/* eslint-disable import/no-cycle */
import axios from 'axios';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';
import { updateMainValue } from '../updateMainValue';

export default async (dispatch, getState, schema) => {
  console.log('multi search called');
  try {
    const { form, main } = getState();
    const { buttonType, brandId, budgetId, searchType, typeId } = form.multiSearch;
    dispatch(updateFormValue(schema, { loading: true, error: null, success: null }));
    const multiSearchRes = await axios.post(`${ENDPOINT}/web/multi-search`, { buttonType, brandId, budgetId, searchType, typeId });
    console.log('multiSearch Res', multiSearchRes);
    if (multiSearchRes.status === 200) {
      dispatch(updateMainValue('multiSearchResult', multiSearchRes.data));
      dispatch(updateFormValue(schema, { loading: false, success: '', error: null }));
    }
  } catch (e) {
    dispatch(updateFormValue(schema, { loading: null, success: null, error: 'searching faild' }));
    console.error('error in enquiry');
  }
};
