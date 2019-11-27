'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stripe = require('stripe');

var _stripe2 = _interopRequireDefault(_stripe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stripeFunc = (0, _stripe2.default)('sk_test_CqTsz9HKdKHCnp7g44dDwXBV');

exports.default = (req, res) => {
  // console.log('payment metod called', req.body);
  const { amount, token } = req.body;
  const payresult = stripeFunc.charges.create({
    amount: req.body.amount,
    currency: 'usd',
    source: req.body.tokenId,
    description: 'Test payment'
  }).then(result => {
    // console.log('payment request', result.paid, result.status);
    if (result.paid && result.status === 'succeeded') {
      res.statusCode = 200;
      res.send(JSON.stringify({ paid: result.paid, paymentStatus: result.status }));
    }
  }).catch(e => {
    res.statusCode = e.statusCode;
    res.send(JSON.stringify({ error: e.message }));
  });
  // console.log('final payment result', payresult);
};