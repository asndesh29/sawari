'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _cache = require('../cache');

var _cache2 = _interopRequireDefault(_cache);

var _passwordHandler = require('./passwordHandler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SESSION_AGE = 7 * 86400 * 1000; // session duration of one week

exports.default = async function login(record) {
  const { password } = record;
  const res = await _db2.default.execute(async ({ findOne, find }) => {
    const rec = await findOne('User', { userName: record.userName });
    const checkPasswordStatus = await (0, _passwordHandler.checkPassword)(password, rec.password);
    if (!rec || !checkPasswordStatus) {
      throw new Error('Invalid username/password');
    }
    // const pendingQuestionRes = await find('UserQuestion', { serveStatus: 1 });
    // console.log('pending Questions status', pendingQuestionRes);
    const userDetails = await findOne('Astrologer', { userId: rec.id });
    const token = (0, _uuid2.default)();
    const user = {
      id: rec.id,
      name: rec.name,
      email: rec.userName,
      userName: rec.email,
      type: rec.type,
      token,
      userDetails
      // pendingQuestion: pendingQuestionRes,
    };
    _cache2.default.users.set(token, user, SESSION_AGE);
    return user;
  });
  return res;
};