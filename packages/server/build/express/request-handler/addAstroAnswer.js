'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateToken = require('../../auth/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

var _addAstroAnswer = require('../../api/addAstroAnswer');

var _addAstroAnswer2 = _interopRequireDefault(_addAstroAnswer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  const reqBody = req.body;
  const { token } = reqBody;
  try {
    const user = (0, _validateToken2.default)(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await (0, _addAstroAnswer2.default)(reqBody);
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
    res.send(JSON.stringify(e));
    throw new Error('Fetch initial data response faild');
  }
};