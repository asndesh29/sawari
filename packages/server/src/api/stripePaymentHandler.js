import stripe from 'stripe';
import db from '../db';

const stripeFunc = stripe('sk_test_S85JXdnYfB736VhmwMyCQzPo');

export default async (req, res) => {
  // console.log('payment metod called', req.body);
  const questionRateRes = await db.execute(async ({ findOne }) => {
    const appconfig = await findOne('AppConfiguration', { id: 1 });
    if (appconfig) {
      return appconfig;
    }
    throw new Error('Faild to fetch questin rate');
  });
  // console.log('question price', questionRateRes.questionRate);
  const { tokenId } = req.body;
  const amount = parseFloat(questionRateRes.questionRate, 10) * 100;
  stripeFunc.charges.create({
    amount,
    currency: 'usd',
    source: tokenId,
    description: 'Payment for ask question from bidha android app',
  })
    .then((result) => {
      // console.log('payment request', result.paid, result.status);
      if (result.paid && result.status === 'succeeded') {
        res.statusCode = 200;
        res.send(JSON.stringify({ paid: result.paid, paymentStatus: result.status }));
      }
    })
    .catch((e) => {
      console.log('error in payment', e);
      res.statusCode = e.statusCode;
      res.send(JSON.stringify({ error: e.message }));
    });
  // console.log('final payment result', payresult);
};
