'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _fetchAnsQsnTransDetails = require('./fetchAnsQsnTransDetails');

var _fetchAnsQsnTransDetails2 = _interopRequireDefault(_fetchAnsQsnTransDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const lastQuestionFinder = async (questionId, find, findOne) => {
  // console.log('lastQuestionFinder called', questionId);
  const findRegistrationTokenRes = await findOne('UserQuestion', { id: questionId });
  // console.log('findRegistrationTokenRes', findRegistrationTokenRes);
  const findAllQuestionByRegistrationRes = await find('UserQuestion', { registrationToken: findRegistrationTokenRes.registrationToken, serveStatus: 0 });
  const lastQsnRes = findAllQuestionByRegistrationRes[findAllQuestionByRegistrationRes.length - 1];
  // console.log('lastQsnRes', lastQsnRes);
  const currentQuestionTransDetails = await (0, _fetchAnsQsnTransDetails2.default)(findRegistrationTokenRes.registrationToken, null, findRegistrationTokenRes.id);
  if (lastQsnRes) {
    const lastQuestionTransDetails = await (0, _fetchAnsQsnTransDetails2.default)(lastQsnRes.registrationToken, null, lastQsnRes.id);
    return { currentQuestionTransDetails: currentQuestionTransDetails.translatorDetails, lastQuestionDetails: lastQuestionTransDetails.translatorDetails, currentQuestionTimeStamp: findRegistrationTokenRes.timeStamp, currentUserId: findRegistrationTokenRes.userId };
  }
  return { currentQuestionTransDetails: currentQuestionTransDetails.translatorDetails, lastQuestionDetails: null, currentQuestionTimeStamp: findRegistrationTokenRes.timeStamp, currentUserId: findRegistrationTokenRes.userId };
};

exports.default = async user => {
  //  console.log('fetchWebInitialData called');
  try {
    const res = await _db2.default.execute(async ({ find, findOne }) => {
      const pendingQuestionsRes = await find('UserQuestion', { serveStatus: 1 });
      const pendingQuestionsResClarify = await find('UserQuestion', { serveStatus: 3 });
      const pendingAstroQuestionRes = await find('ModeratorQuestion', { serveStatus: 1 });
      const pendingAstroQuestionResClarify = await find('ModeratorQuestion', { serveStatus: 3 });
      const pendingAnswerRes = await find('AstrologerAnswer', { serveStatus: 1 });
      const pendingAnswerResClarify = await find('AstrologerAnswer', { serveStatus: 3 });
      const userDetails = await findOne('Astrologer', { userId: user.id });
      const appConfig = await findOne('AppConfiguration', { id: 1 });
      const clarifyQuestionRes = await find('ClarifyQuestion', { serveStatus: 1 });
      const clarifyPromiseAll = [];
      clarifyQuestionRes.forEach(data => clarifyPromiseAll.push(findOne('UserQuestion', { id: data.questionId })));
      const clarifyAllRes = await Promise.all(clarifyPromiseAll);
      const userList = await find('User');
      const bidhaUserList = await find('BidhaUser');
      const bidhaUserListFilterData = bidhaUserList.map(data => ({ id: data.id, fbToken: data.fbToken, firstName: data.firstName }));
      const promiseAll = [];
      userList.forEach(data => {
        delete data.password;
        promiseAll.push(findOne('Astrologer', { userId: data.id }));
      });
      const allUserDetails = await Promise.all(promiseAll);
      const allUserList = allUserDetails.map((data, idx) => _extends({}, userList[idx], { userDetails: data || null }));

      const lastQuestionAllPromise = [];
      pendingAstroQuestionRes.forEach(data => lastQuestionAllPromise.push(lastQuestionFinder(data.questionId, find, findOne)));
      const lastQuestionRes = await Promise.all(lastQuestionAllPromise);
      const finalAstroQuestion = pendingAstroQuestionRes.map((data, idx) => _extends({}, data, lastQuestionRes[idx]));

      const lastQuestionAllPromiseClarify = [];
      pendingAstroQuestionResClarify.forEach(data => lastQuestionAllPromiseClarify.push(lastQuestionFinder(data.questionId, find, findOne)));
      const lastAstroQuestionResClarify = await Promise.all(lastQuestionAllPromiseClarify);
      const finalAstroQuestionClarify = pendingAstroQuestionResClarify.map((data, idx) => _extends({}, data, lastAstroQuestionResClarify[idx]));

      const lastQuestionResPromises = [];
      pendingQuestionsRes.forEach(data => lastQuestionResPromises.push(lastQuestionFinder(data.id, find, findOne)));
      const lastQuestionRes1 = await Promise.all(lastQuestionResPromises);
      const finalQuestionRes1 = pendingQuestionsRes.map((data, idx) => _extends({}, data, lastQuestionRes1[idx]));

      const lastQuestionResPromisesClarify = [];
      pendingQuestionsResClarify.forEach(data => lastQuestionResPromisesClarify.push(lastQuestionFinder(data.id, find, findOne)));
      const lastQuestionResClarify = await Promise.all(lastQuestionResPromises);
      const finalQuestionResClarify = pendingQuestionsResClarify.map((data, idx) => _extends({}, data, lastQuestionResClarify[idx]));

      const pendingAnswerPromises = [];
      pendingAnswerRes.forEach(data => pendingAnswerPromises.push(lastQuestionFinder(data.questionId, find, findOne)));
      const pendAnswerResWithLastRes = await Promise.all(pendingAnswerPromises);
      const finalPendingAnswer = pendingAnswerRes.map((data, idx) => _extends({}, data, pendAnswerResWithLastRes[idx]));
      switch (user.type) {
        case 'super':
          return {
            userList: allUserList,
            pendingQuestion: clarifyAllRes,
            pendingAnswer: finalPendingAnswer,
            currentUserDetails: _extends({}, user, { userDetails }),
            appConfig,
            bidhaUserList: bidhaUserListFilterData
          };
        case 'admin':
          return {
            userList: allUserList,
            pendingQuestion: clarifyAllRes,
            pendingAnswer: finalPendingAnswer,
            currentUserDetails: _extends({}, user, { userDetails }),
            appConfig,
            bidhaUserList: bidhaUserListFilterData
          };
        case 'moderator':
          return {
            userList: allUserList,
            pendingQuestion: [...finalQuestionResClarify, ...finalQuestionRes1],
            pendingAnswer: [...pendingAnswerResClarify, ...finalPendingAnswer],
            currentUserDetails: _extends({}, user, { userDetails })
          };
        case 'astrologer':
          return {
            userList: allUserList,
            pendingQuestion: [...finalAstroQuestionClarify, ...finalAstroQuestion],
            pendingAnswer: finalPendingAnswer,
            currentUserDetails: _extends({}, user, { userDetails })
          };
        default:
          return null;
      }
    });
    return res;
  } catch (e) {
    console.log('error in fetching initial data', e);
    throw new Error('DB access failed');
  }
};