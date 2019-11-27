'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateToken = require('../../auth/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

var _fetchReport = require('../../api/fetchReport');

var _fetchReport2 = _interopRequireDefault(_fetchReport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  try {
    const { token, startDate, endDate, modAstroId } = req.query;
    // console.log('registration token', token, startDate, endDate, modAstroId);
    const user = (0, _validateToken2.default)(token);
    // console.log('fetch initial data web handler called', req.query.token, user);
    if (user) {
      const apiRes = await (0, _fetchReport2.default)(startDate, endDate, modAstroId);
      // console.log('fetch ans trans details res', apiRes);
      res.statusCode = 200;
      res.send(JSON.stringify(apiRes));
    } else {
      res.send('authentication failded');
    }
  } catch (e) {
    throw new Error('Fetch initial data response faild');
  }
};