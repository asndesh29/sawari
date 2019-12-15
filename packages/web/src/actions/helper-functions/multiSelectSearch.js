/* eslint-disable import/no-cycle */
import { updateMainValue } from '../updateMainValue';

export default async (dispatch, getState, schema) => {
  console.log('multi search called');
  dispatch(updateMainValue('multiSearchResult', true));
};
