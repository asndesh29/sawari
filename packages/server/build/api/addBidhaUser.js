'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async record => {

  const respose = await _db2.default.execute(async ({ insert, findOne, update }) => {
    const { firstName, gender, dob, time, country, city, state, accurateTime, registrationToken, uid } = record;

    if (registrationToken && registrationToken !== 'null') {
      const findOneRes = await findOne('BidhaUser', { firstName, gender, dob, time, country, city, state, accurateTime, registrationToken, id: uid });
      if (findOneRes) {
        delete record.uid;
        await update('BidhaUser', record, { id: uid });
        return 'Profile successfully updated';
      }
      delete record.uid;
      const res = await insert('BidhaUser', record);
      return { updateId: res };
    }
    if (!registrationToken || registrationToken === 'null') {
      const token = (0, _uuid2.default)();
      delete record.uid;
      const res = await insert('BidhaUser', _extends({}, record, { registrationToken: token }));
      return { uid: res, token };
    }
  });
  return respose;
};