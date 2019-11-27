import { UPDATE_MAIN_VALUE } from '../actions/types';

const initialAppState = {
  ansqsn: [],
  screen: 'login',
  modal: false,
  initialData: {},
  currentAdminContent: 'newReport',
  settingsContent: 'messageAndNotification',
  translatorDetails: {},
  profileChangeLogs: [],
  currentUserDetails: {},
  currentQuestionDetails: {},
  report: null,
  loginDetail: null,
  note: [],
  searchUser: null,
  postpondedQuestionList: [],
  pendingQuestionList: [],
  showNotification: false,
  currentServeStatus: null,
  showAstroModReport: false,
};

export default (state = initialAppState, action) => {
  switch (action.type) {
    case UPDATE_MAIN_VALUE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
