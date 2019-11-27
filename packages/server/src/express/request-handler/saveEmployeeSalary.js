import validateToken from '../../auth/validateToken';
import saveEmployeeSalaryHandler from '../../api/saveEmployeeSalary';

export default async (req, res) => {
  // console.log('request handler callled', req.body);
  const reqBody = req.body;
  const { token } = reqBody;
  try {
    const user = validateToken(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await saveEmployeeSalaryHandler(reqBody, user);
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
    res.send('faild to insert vedicSign');
    throw new Error('Faild to insert data response faild');
  }
};
