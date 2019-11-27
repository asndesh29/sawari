'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _sendNotification = require('./sendNotification');

var _sendNotification2 = _interopRequireDefault(_sendNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const findFcmToken = async (qid, findOne) => {
  const userQuestion = await findOne('UserQuestion', { id: qid });
  const userRes = await findOne('BidhaUser', { id: userQuestion.userId });
  return userRes.fbToken;
};

exports.default = async question => {
  try {
    const res = await _db2.default.execute(async ({ insert, update, findOne }) => {
      const findQuestion = await findOne('ModeratorAnswer', { questionId: question.questionId });
      if (findQuestion) {
        const updateModQuestionRes = await update('ModeratorAnswer', { questionId: question.questionId }, question);
        const updateAstrologerAnswerRes = await update('AstrologerAnswer', { serveStatus: '0' }, { questionId: question.questionId });
        const updateUserQuestionRes = await update('UserQuestion', { serveStatus: '0' }, { id: question.questionId });
        if (updateModQuestionRes && updateUserQuestionRes && updateAstrologerAnswerRes) {
          return 'successfully updated';
        }
        throw new Error('updated faild');
      } else {
        const insertModRes = await insert('ModeratorAnswer', question);
        const updateAstroAnsRes = await update('AstrologerAnswer', { serveStatus: '0' }, { questionId: question.questionId });
        const updateUserQsnRes = await update('UserQuestion', { serveStatus: '0' }, { id: question.questionId });
        if (insertModRes && updateAstroAnsRes && updateUserQsnRes) {
          const fcmToken = await findFcmToken(question.questionId, findOne);
          await (0, _sendNotification2.default)({ notiTitle: 'Bidha', notiBody: 'Your question has been answered. Please check your message.', message: '', users: [{ fbToken: fcmToken }] });
          return 'Inserted successfully';
        }
        throw new Error('Inserted failed');
      }
    });
    return res;
  } catch (e) {
    console.log('error in addmod ans api', e);
    throw new Error('Data Access faild');
  }
};