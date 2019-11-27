import validateToken from '../../auth/validateToken';
import saveAppConfiguration from '../../api/saveAppConfiguration';

export default async (req, res) => {
  // console.log('app config save requestion handler called', req.body);
  const reqBody = req.body;
  const { token } = reqBody;
  try {
    const user = validateToken(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await saveAppConfiguration(reqBody, user);
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
    res.send('faild to update app config');
    throw new Error('Update faild faild');
  }
};
