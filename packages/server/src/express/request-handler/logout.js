import validateToken from '../../auth/validateToken';
import logout from '../../api/logout';
import db from '../../db';

export default async (req, res) => {
  // console.log('app config save requestion handler called', req.body);
  const reqBody = req.body;
  const { token } = reqBody;
  try {
    const user = validateToken(token);
    if (user) {
      delete reqBody.token;
      const apiRes = await logout(reqBody, user);
      if (apiRes) {
        db.execute(async ({ insert }) => {
          insert('LoginStatus', { userId: user.id, type: 'logout', timeStamp: Date.now() });
        });
        res.statusCode = 200;
        res.send(JSON.stringify(JSON.stringify(apiRes)));
      }
    } else {
      res.statusCode = 400;
      res.send('authentication failded');
    }
  } catch (e) {
    console.log('error in logout handler', e);
    res.statusCode = 400;
    res.send('faild to update app config');
    throw new Error('Update faild faild');
  }
};
