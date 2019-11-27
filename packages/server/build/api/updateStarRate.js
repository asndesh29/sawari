'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async record => {
  // console.log('data in api star', record);
  try {
    const result = await _db2.default.execute(async ({ update }) => {
      const res = await update('UserQuestion', { starRating: record.star }, { id: record.qid });
      return res;
    });
    return result;
  } catch (e) {
    console.log('error star rating update api', e);
    throw e;
  }
};