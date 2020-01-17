import { UPDATE_MAIN_VALUE } from '../actions/types';

const initialAppState = {
  ansqsn: [],
  screen: 'login',
  modal: false,
  initialData: {},
  initialAdminData: {},
  currentAdminContent: 'addProduct',
  currentCarDetail: null,
  loginDetail: null,
  currentUserDetails: null,
  multiSearchResult: null,
  currentUsedVehicleDetails: null,
};

export default (state = initialAppState, action) => {
  switch (action.type) {
    case UPDATE_MAIN_VALUE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
