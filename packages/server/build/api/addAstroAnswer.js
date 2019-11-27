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
      const findQuestion = await findOne('AstrologerAnswer', { questionId: question.questionId });
      if (findQuestion) {
        const updateModQuestionRes = await update('AstrologerAnswer', { questionId: question.questionId }, question);
        const updateUserQuestionRes = await update('ModeratorQuestion', { serveStatus: '0' }, { questionId: question.modQuestionId });
        if (updateModQuestionRes && updateUserQuestionRes) {
          return 'successfully updated';
        }
        throw new Error('updated faild');
      } else {
        const insertModRes = await insert('AstrologerAnswer', question);
        const updateUserQsnRes = await update('ModeratorQuestion', { serveStatus: '0' }, { questionId: question.questionId });
        if (insertModRes && updateUserQsnRes) {
          return 'Inserted successfully';
        }
        throw new Error('Inserted failed');
      }
    });
    return res;
  } catch (e) {
    console.log(e);
    throw new Error('Data Access faild');
  }
};