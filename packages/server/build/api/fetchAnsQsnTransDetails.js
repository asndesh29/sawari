'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findQuestionDetails = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const findQuestionDetails = exports.findQuestionDetails = async questionId => {
  let userDetails = null;
  let modQDetails = null;
  let modADetails = null;
  let astroDetails = null;
  let adminDetails = null;
  const result = await _db2.default.execute(async ({ findOne }) => {
    try {
      const userQuestionRes = await findOne('UserQuestion', { id: questionId });
      if (userQuestionRes) {
        userDetails = await findOne('BidhaUser', { id: userQuestionRes.userId });
      }
      const modQuesionRes = await findOne('ModeratorQuestion', { questionId });
      if (modQuesionRes) {
        modQDetails = await findOne('Astrologer', { userId: modQuesionRes.modId });
      }
      const astroAnswerRes = await findOne('AstrologerAnswer', { questionId });
      if (astroAnswerRes) {
        astroDetails = await findOne('Astrologer', { userId: astroAnswerRes.astroId });
      }
      const modAnswerRes = await findOne('ModeratorAnswer', { questionId });
      if (modAnswerRes) {
        modADetails = await findOne('Astrologer', { userId: modAnswerRes.modId });
      }
      const clarifyQuestionRes = await findOne('ClarifyQuestion', { questionId });
      if (clarifyQuestionRes) {
        adminDetails = await findOne('Astrologer', { userId: clarifyQuestionRes.adminId });
      }
      return {
        translatorDetails: {
          modQuestion: modQuesionRes ? { modQuestion: modQuesionRes, userDetails: modQDetails || undefined } : null,
          astroAnswer: astroAnswerRes ? { astroAnswer: astroAnswerRes, userDetails: astroDetails || undefined } : null,
          modAnswer: modAnswerRes ? { modAnswer: modAnswerRes, userDetails: modADetails || undefined } : null,
          userQuestion: userQuestionRes ? { userQuestion: userQuestionRes, userDetails: userDetails || undefined } : null,
          clarifyQuestion: clarifyQuestionRes && clarifyQuestionRes.clarifyText ? { clarifyQuestion: clarifyQuestionRes, userDetails: adminDetails || undefined } : null
        }
      };
    } catch (e) {
      throw e;
    }
  });
  return result;
};

const findUserQuestionByid = async userId => {
  try {
    const promises = [];
    const result = await _db2.default.execute(async ({ find }) => {
      const userQuestionList = await find('UserQuestion', { userId });
      userQuestionList.forEach(async question => {
        promises.push(findQuestionDetails(question.id));
      });
      const QuestionDetailRes = await Promise.all(promises);
      return QuestionDetailRes;
    });
    return result;
  } catch (e) {
    throw e;
  }
};

exports.default = async (registrationToken, user, questionId) => {
  // console.log('AnsQuestionDtails finder called');
  try {
    let MainRegistrationToken = null;
    const promises = [];
    const result = await _db2.default.execute(async ({ find, findOne }) => {
      if (registrationToken === 'undefined') {
        const findOneRes = await findOne('UserQuestion', { id: questionId });
        MainRegistrationToken = findOneRes.registrationToken;
      } else {
        MainRegistrationToken = registrationToken;
      }
      const userDetailsRes = await find('BidhaUser', { registrationToken: MainRegistrationToken });
      userDetailsRes.forEach(async data => {
        promises.push(findUserQuestionByid(data.id));
      });
      const testResult = await Promise.all(promises);
      return { userChangeLogs: testResult, userDetails: userDetailsRes };
    });
    const currentQuestionDetails = await findQuestionDetails(questionId);
    return _extends({}, result, currentQuestionDetails);
  } catch (e) {
    throw e;
  }
};