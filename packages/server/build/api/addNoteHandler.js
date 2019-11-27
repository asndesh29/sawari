'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async record => {
  // console.log('add note api called', record);
  try {
    const res = await _db2.default.execute(async ({ update }) => {
      switch (record.type) {
        case 'modQuestion':
          await update('ModeratorQuestion', { note: record.note }, { questionId: record.questionId });
          return 'Successfully updated';
        case 'astroAnswer':
          await update('AstrologerAnswer', { note: record.note }, { questionId: record.questionId });
          return 'Successfully updated';
        case 'modAnswer':
          await update('ModeratorAnswer', { note: record.note }, { questionId: record.questionId });
          return 'Successfully updated';
        case 'clarifyQuestion':
          await update('ClarifyQuestion', { note: record.note }, { questionId: record.questionId });
          return 'Successfully updated';
        default:
          throw 'faild to add note';
      }
    });
    return res;
  } catch (e) {
    console.log(e);
    throw new Error('Data Access faild');
  }
};