'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async userId => {

  try {
    const result = await _db2.default.execute(async ({ deleteQuery }) => {
      const delRes = await deleteQuery('User', { id: userId });
      if (delRes) {
        return delRes;
      }
      throw 'User deletion faild';
    });
    return result;
  } catch (e) {
    console.log('error in delete user api', e);
    throw e;
  }
};