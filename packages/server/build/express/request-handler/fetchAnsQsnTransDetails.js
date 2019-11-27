'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validateToken = require('../../auth/validateToken');

var _validateToken2 = _interopRequireDefault(_validateToken);

var _fetchAnsQsnTransDetails = require('../../api/fetchAnsQsnTransDetails');

var _fetchAnsQsnTransDetails2 = _interopRequireDefault(_fetchAnsQsnTransDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (req, res) => {
  const { token, registrationToken, questionId } = req.query;
  try {
    const user = (0, _validateToken2.default)(token);
    // console.log('fetch initial data web handler called', req.query.token, user);
    if (user) {
      const apiRes = await (0, _fetchAnsQsnTransDetails2.default)(registrationToken, user, questionId);
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