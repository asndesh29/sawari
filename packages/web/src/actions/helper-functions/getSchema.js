import axios from 'axios';
import { ENDPOINT } from '../../config';

export default (schema, id) => async (dispatch, getState) => {
  console.log('get schema called', id);
  const resData = await axios.get(`${ENDPOINT}/web/get-schema?schema=${schema}&id=${id}`);
  console.log('getSchema res', resData);
  if (resData.status === 200) {
    return resData.data;
  }
  return false;
};
