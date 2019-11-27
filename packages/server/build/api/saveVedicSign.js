'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (record, user) => {
  // console.log('add note api called', record);
  try {
    const res = await _db2.default.execute(async ({ update }) => {
      await update('BidhaUser', { vedicSign: JSON.stringify(record) }, { id: record.userId });
      return 'Successfully updated';
    });
    return res;
  } catch (e) {
    console.log(e);
    throw new Error('Data Access faild');
  }
};