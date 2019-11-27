'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateToken = require('../../auth/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

var _saveAppConfiguration = require('../../api/saveAppConfiguration');

var _saveAppConfiguration2 = _interopRequireDefault(_saveAppConfiguration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  // console.log('app config save requestion handler called', req.body);
  const reqBody = req.body;
  const { token } = reqBody;
  try {
    const user = (0, _validateToken2.default)(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await (0, _saveAppConfiguration2.default)(reqBody, user);
      if (apiRes) {
        res.statusCode = 200;
        res.send(JSON.stringify(JSON.stringify(apiRes)));
      }
    } else {
      res.statusCode = 400;
      res.send('authentication failded');
    }
  } catch (e) {
    res.statusCode = 400;
    res.send('faild to update app config');
    throw new Error('Update faild faild');
  }
};