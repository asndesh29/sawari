import validateToken from '../../auth/validateToken';
import saveClarifyQuestion from '../../api/saveClarifyQuestion';

export default async (req, res) => {
  // console.log('clarify handler called requestion handler called', req.body);
  const reqBody = req.body;
  const { token } = reqBody;
  try {
    const user = validateToken(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await saveClarifyQuestion(reqBody, user);
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
    res.statusCode = 400;
    res.send('faild to update clarify question');
    throw new Error('Update faild faild');
  }
};
