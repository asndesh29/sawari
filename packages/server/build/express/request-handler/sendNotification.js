'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sendNotification = require('../../api/sendNotification');

var _sendNotification2 = _interopRequireDefault(_sendNotification);

var _validateToken = require('../../auth/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  // console.log('send notification handler called', req.body);
  try {
    const reqBody = req.body;
    const { token } = reqBody;
    const user = (0, _validateToken2.default)(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await (0, _sendNotification2.default)(reqBody, user);
      // console.log('clarify save api respose', apiRes);
      if (apiRes) {
        res.statusCode = 200;
        res.send(JSON.stringify(JSON.stringify(apiRes)));
      }
    } else {
      res.statusCode = 400;
      res.send('authentication failded');
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('Faild to send Notification');
  }
};