'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (record, user) => {
  try {
    const res = await _db2.default.execute(async ({ findOne, update, insert }) => {
      const findOneRes = await findOne('Astrologer', { userId: record.userId });
      if (findOneRes) {
        await update('Astrologer', record, { userId: record.userId });
        const resPonse = await findOne('Astrologer', { userId: record.userId });
        return resPonse;
      }
      const insertRes = await insert('Astrologer', record);
      const resPonse = await findOne('Astrologer', { id: insertRes });
      return resPonse;
    });
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};