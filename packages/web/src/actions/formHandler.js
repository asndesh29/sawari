import { UPDATE_FORM_VALUE } from './types';
import loginHandler from './helper-functions/loginHandler';

export const updateFormValue = (schema, data) => async dispatch => dispatch({
  type: UPDATE_FORM_VALUE,
  payload: { schema, data },
});

export const submitFormHandler = schema => async (dispatch, getState) => {
  switch (schema) {
    case 'login':
      loginHandler(dispatch, getState, schema);
      break;
    default:
      return null;
  }
};
