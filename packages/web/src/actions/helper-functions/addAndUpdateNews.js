/* eslint-disable import/no-cycle */
import axios from 'axios';
import { updateMainValue } from '../index';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';

const updateUser = (getState, record) => getState.main.initialAdminData.News.map(data => data.id === record.id ? record : data); //eslint-disable-line

export default () => async (dispatch, getState) => {
  console.log('add update News called');
  const schema = 'News';
  try {
    dispatch(updateFormValue(schema, { loading: true, error: null, success: null }));
    const token = await sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
    const { main, form } = getState();
    const record = form[schema];
    delete record.loading;
    delete record.success;
    delete record.error;
    delete record.image1;
    delete record.image2;
    delete record.image3;
    delete record.image4;
    const newsRes = await axios.post(`${ENDPOINT}/web/add-update-news`, { ...record, token });
    // console.log('update success', newsRes);
    if (newsRes.status === 200) {
      dispatch(updateFormValue(schema, { loading: false, success: 'Successfully updated.', error: null }));
      if (record.id) {
        dispatch(updateMainValue('initialAdminData', { ...getState().main.initialAdminData, News: updateUser(getState(), record) }));
      } else {
        dispatch(updateMainValue('initialAdminData', { ...getState().main.initialAdminData, News: [...getState().main.initialAdminData.News, { ...record, id: newsRes.data }] }));
      }
    }
  } catch (e) {
    console.log('Error in update video', e);
    dispatch(updateFormValue(schema, { loading: false, success: null, error: 'Update faild' }));
  }
};
