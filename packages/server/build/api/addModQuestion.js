'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async question => {
  try {
    const res = await _db2.default.execute(async ({ insert, update, findOne }) => {
      const findQuestion = await findOne('ModeratorQuestion', { questionId: question.questionId });
      if (findQuestion) {
        const updateModQuestionRes = await update('ModeratorQuestion', { questionId: question.questionId }, question);
        if (updateModQuestionRes) {
          return 'successfully updated';
        }
        throw new Error('updated faild');
      } else {
        const insertModRes = await insert('ModeratorQuestion', question);
        const updateUserQsnRes = await update('UserQuestion', { serveStatus: '2' }, { id: question.questionId });
        if (insertModRes && updateUserQsnRes) {
          return 'Inserted successfully';
        }
        throw new Error('Inserted failed');
      }
    });
    return res;
  } catch (e) {
    throw new Error('Data Access faild');
  }
};