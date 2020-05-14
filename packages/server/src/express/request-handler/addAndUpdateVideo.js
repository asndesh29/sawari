import validateToken from '../../auth/validateToken';
import addAndUpateVideo from '../../api/addAndUpdateVideo';
import { genHashPassword } from '../../auth/passwordHandler';

export default async (req, res) => {
  console.log('add video req called', req.body);
  try {
    const data = req.body;
    const { token } = data;
    let apiRes = null;
    const user = await validateToken(token);
    delete data.token;
    if (user.type === 'admin') {
      apiRes = await addAndUpateVideo({ ...data, userId: user.id });
    } else {
      throw new Error('Authenticaiton faild');
    }
    res.statusCode = 200;
    res.send(JSON.stringify(apiRes));
  } catch (e) {
    console.log('error in add udpate video', e);
    res.statusCode = 400;
    res.send(JSON.stringify(e));
  }
};
