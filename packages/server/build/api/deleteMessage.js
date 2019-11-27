'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async data => {
  try {
    const result = await _db2.default.execute(async ({ update }) => {
      if (data.type === 'question') {
        const updateRes = await update('UserQuestion', { deleteStatus: true }, { id: data.qid });
        if (updateRes) {
          return 'Successfully deleted';
        }
        throw 'Message deletion faild';
      } else {
        const updateResAns = await update('ModeratorAnswer', { deleteStatus: true }, { questionId: data.qid });
        if (updateResAns) {
          return 'Successfully deleted';
        }
        throw 'Messaage deletion faild';
      }
    });
    return result;
  } catch (e) {
    console.log('error in deleteMessage api', e);
    throw e;
  }
};