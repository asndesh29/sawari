import { UPDATE_MODAL_VALUE } from '../actions/types';

const initialModalState = {
  showAddUserModal: false,
  showAddSampleQuestionModal: false,
};

export default (state = initialModalState, action) => {
  switch (action.type) {
    case UPDATE_MODAL_VALUE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};

