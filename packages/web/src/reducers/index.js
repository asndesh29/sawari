import { combineReducers } from 'redux';
import mainAppReducer from './mainReducer';
import modalReducer from './ modalReducer';
import formReducer from './formReducer';

export default combineReducers({
  main: mainAppReducer,
  form: formReducer,
  modal: modalReducer,
});
