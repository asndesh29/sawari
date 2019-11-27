'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateToken = require('../../auth/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

var _api = require('../../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  const { token } = req.query;
  try {
    const user = await (0, _validateToken2.default)(token);
    // console.log('fetch initial data web handler called', req.query.token, user);
    if (user) {
      const apiRes = await (0, _api.fetchWebInitialData)(user);
      res.statusCode = 200;
      res.send(JSON.stringify(apiRes));
    } else {
      res.statusCode = 400;
      res.send('authentication failded');
    }
  } catch (e) {
    console.log(e);
    throw new Error('Fetch initial data response faild');
  }
};