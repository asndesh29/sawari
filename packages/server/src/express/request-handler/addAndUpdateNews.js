
import urlSlug from 'url-slug';
import validateToken from '../../auth/validateToken';
import addAndUpdateNews from '../../api/addAndUpdateNews';
import { genHashPassword } from '../../auth/passwordHandler';


export default async (req, res) => {
  console.log('add news req called', req.body);
  try {
    const data = req.body;
    const { token, header } = data;
    const slug = urlSlug(header);
    let apiRes = null;
    const user = await validateToken(token);
    delete data.token;
    if (user.type === 'admin') {
      apiRes = await addAndUpdateNews({ ...data, userId: user.id, timeStamp: Date.now(), slug });
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
