import validateToken from '../../auth/validateToken';
import addModAnswer from '../../api/addModAnswer';

export default async (req, res) => {
  const reqBody = req.body;
  const { token } = reqBody;
  try {
    const user = validateToken(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await addModAnswer(reqBody);
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
    res.send('faild to insert moderator answer');
    throw new Error('Fetch initial data response faild');
  }
};
