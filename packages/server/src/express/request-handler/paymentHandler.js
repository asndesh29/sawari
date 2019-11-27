import paymentSalary from '../../api/paymentHandler';
import validateToken from '../../auth/validateToken';

export default async (req, res) => {
  // console.log(' payment employee salary called', req.body);
  try {
    const { token } = req.body;
    const user = await validateToken(token);
    delete req.body.token;
    if (user) {
      const result = await paymentSalary(req.body);
      if (result) {
        res.statusCode = 200;
        res.send(JSON.stringify(result));
      }
    } else {
      res.statusCode = 400;
      res.send('authentication failded');
    }
  } catch (e) {
    console.error(e);
    res.statusCode = 201;
    res.send(JSON.stringify(e.message));
  }
};
