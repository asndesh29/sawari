import { UPDATE_FORM_VALUE } from '../actions/types';

const initialFormState = {
  login: {
    userName: '', password: '', error: null, success: null, loading: null,
  },
  addUser: {
    userName: '', password: '', name: '', type: '', success: null, loading: null, error: null,
  },
  addProfileDetails: {
    name: '', gender: '', experience: '', qualification: '', phoneNo: '', image: '', password: '', success: null, loading: null, error: null,
  },
  appConfiguration: {
    questionRate: '', initialMessage: '', freeQuestionRound: null, success: null, loading: null, error: null,
  },
  report: {
    startDate: null, endDate: null, questionType: 'showall', modAstroId: null, loading: null, error: null, success: null,
  },
  addNote: {
    note: null, loading: null, error: null, success: null, type: null,
  },
  saveEmployeeSalary: {
    astroFixedSalary: null, astroFirstBonus: null, astroSecondBonus: null, modFirstBonus: null, modFixedSalary: null, modFixedSalaryAnswer: null, modSecondBonus: null, success: null, error: null, loading: null,
  },
  searchUserId: {
    userId: null, loading: false, error: null, success: null,
  },
  addPayment: {
    fixedSalary: '', bonusSalary: '', loading: null, error: null, success: null,
  },
};

export default (state = initialFormState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE:
      return {
        ...state,
        [action.payload.schema]: {
          ...state[action.payload.schema], ...action.payload.data,
        },
      };
    default:
      return state;
  }
};
