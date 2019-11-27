'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async record => {
  // console.log('sendnotification called', record);
  const { users } = record;
  const userRegistrationTokens = users.map(data => data.fbToken);
  // console.log('before remove', userRegistrationTokens);
  const removeDublicateToken = _lodash2.default.uniq(userRegistrationTokens);
  // console.log(removeDublicateToken);
  delete record.users;
  // console.log('records', record);
  try {
    const res = await (0, _axios2.default)({
      url: 'https://fcm.googleapis.com/fcm/send',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'key=AIzaSyAcXJV1k5N5XFFzVC54GsAafk-S8CqmfDQ'
      },
      data: {
        registration_ids: removeDublicateToken,
        // collapse_key: 'type_a',
        data: record
      }
    });
    return res.data;
  } catch (e) {
    console.log('Error in send notification api', e);
    throw e;
  }
};