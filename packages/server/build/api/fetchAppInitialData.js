'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fetchAnswerDetails = async questionId => {
  try {
    const result = await _db2.default.execute(async ({ findOne }) => {
      const answerRes = await findOne('ModeratorAnswer', { questionId });
      if (answerRes) {
        const astroIdRes = await findOne('AstrologerAnswer', { questionId });
        const astroDetails = await findOne('Astrologer', { userId: astroIdRes.astroId });
        if (astroDetails) {
          return { answerDetail: answerRes, astrologerDetail: astroDetails };
        }
      }
      return null;
    });
    return result;
  } catch (e) {
    throw e;
  }
};

const fetchAnswerQestionDetials = async questionDetails => {
  try {
    const result = await _db2.default.execute(async ({ findOne }) => {
      const answerDetails = await fetchAnswerDetails(questionDetails.id);
      const userDetails = await findOne('BidhaUser', { id: questionDetails.userId });
      return { answer: answerDetails ? _extends({}, answerDetails) : null, question: { questionDetails, userDetails: _extends({}, userDetails) } };
    });
    return result;
  } catch (e) {
    throw e;
  }
};

const fetchAstrologerDetails = async id => {
  try {
    const result = await _db2.default.execute(async ({ findOne }) => {
      const astroRes = await findOne('Astrologer', { userId: id });
      return astroRes;
    });
    return result;
  } catch (e) {
    throw e;
  }
};

exports.default = async condition => {
  try {
    // console.log('initial fetch api called', condition);
    const result = await _db2.default.execute(async ({ find, findOne }) => {
      const qsnRes = await find('UserQuestion', { registrationToken: condition });
      const promiseAll = [];
      const AstroPormise = [];
      qsnRes.forEach(data => {
        promiseAll.push(fetchAnswerQestionDetials(data));
      });
      const allAnswerDetails = await Promise.all(promiseAll);
      const fetchConfiguration = await findOne('AppConfiguration', { id: 1 });
      const fetchAstrologerIdlist = await find('User', { type: 'astrologer' });
      fetchAstrologerIdlist.forEach(data => {
        AstroPormise.push(fetchAstrologerDetails(data.id));
      });
      const astrologerList = await Promise.all(AstroPormise);
      return { astroDetails: astrologerList, ansQuestionDetails: allAnswerDetails, appConfigurationDetails: fetchConfiguration };
    });
    return result;
  } catch (e) {
    console.log('error in fetching app initial data', e);
    throw e;
  }
};