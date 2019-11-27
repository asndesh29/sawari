import validateToken from '../../auth/validateToken';
import addModQuestion from '../../api/addModQuestion';

export default async (req, res) => {
  const reqBody = req.body;
  // console.log('add mod qustion called', req.body);
  const { token } = reqBody;
  try {
    const user = validateToken(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await addModQuestion(reqBody);
      if (apiRes) {
        res.statusCode = 200;
        res.send(JSON.stringify(JSON.stringify(apiRes)));
      }
    } else {
      res.send('authentication failded');
    }
  } catch (e) {
    res.statusCode = 400;
    res.send('Data insertion failed');
    throw new Error('Fetch initial data response faild');
  }
};
