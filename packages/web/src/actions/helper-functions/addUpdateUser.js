/* eslint-disable import/no-cycle */
import axios from 'axios';
import { updateMainValue } from '../index';
import { ENDPOINT } from '../../config';
import { updateFormValue } from '../formHandler';

const updateUser = (getState, record) => getState.main.initialAdminData.User.map(data => data.id === record.id ? record : data); //eslint-disable-line

export default async (dispatch, getState, schema) => {
  console.log('add update user called', schema);
  try {
    dispatch(updateFormValue(schema, { loading: true, error: null, success: null }));
    const token = await sessionStorage.getItem('SESSION_ID'); //eslint-disable-line
    const { main, form } = getState();
    const record = form[schema];
    delete record.loading;
    delete record.success;
    delete record.error;
    const userRes = await axios.post(`${ENDPOINT}/web/add-update-user`, { ...record, token });
    console.log('update success', userRes);
    if (userRes.status === 200) {
      dispatch(updateFormValue(schema, { loading: false, success: 'Successfully updated.', error: null }));
      if (record.id) {
        dispatch(updateMainValue('initialAdminData', { ...getState().main.initialAdminData, User: updateUser(getState(), record) }));
      } else {
        dispatch(updateMainValue('initialAdminData', { ...getState().main.initialAdminData, User: [...getState().main.initialAdminData.User, {...record, id: userRes.data}] }));
      }
    }
  } catch (e) {
    console.log('Error in update user', e);
    dispatch(updateFormValue(schema, { loading: false, success: null, error: 'Update faild' }));
  }
};
