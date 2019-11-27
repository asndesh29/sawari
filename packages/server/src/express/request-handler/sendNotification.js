import sendNotification from '../../api/sendNotification';
import validateToken from '../../auth/validateToken';

export default async (req, res) => {
  // console.log('send notification handler called', req.body);
  try {
    const reqBody = req.body;
    const { token } = reqBody;
    const user = validateToken(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await sendNotification(reqBody, user);
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
    res.statusCode = 500;
    res.send('Faild to send Notification');
  }
};
