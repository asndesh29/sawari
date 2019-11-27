import validateToken from '../../auth/validateToken';
import addAstroAnswer from '../../api/addAstroAnswer';

export default async (req, res) => {
  const reqBody = req.body;
  const { token } = reqBody;
  try {
    const user = validateToken(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await addAstroAnswer(reqBody);
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
