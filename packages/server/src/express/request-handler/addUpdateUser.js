import validateToken from '../../auth/validateToken';
import addUpateUser from '../../api/addUpateUser';
import { genHashPassword } from '../../auth/passwordHandler';

export default async (req, res) => {
  console.log('add user req called', req.body);
  try {
    const data = req.body;
    const { token, plainPassword } = data;
    const hasPassword = await genHashPassword(plainPassword);
    let apiRes = null;
    const user = await validateToken(token);
    delete data.token;
    if (user.type === 'admin') {
      apiRes = await addUpateUser({ ...data, password: hasPassword });
    } else {
      throw new Error('Authenticaiton faild');
    }
    res.statusCode = 200;
    res.send(JSON.stringify(apiRes));
  } catch (e) {
    console.log('error in add udpate profile user', e);
    res.statusCode = 400;
    res.send(JSON.stringify(e));
  }
};
