import { addAstrologer } from '../../api';
import { genHashPassword } from '../../auth/passwordHandler';
import validateToken from '../../auth/validateToken';

export default async (req, res) => {
  // console.log('userRegisteration handler called', req.body);
  try {
    const { password, token } = req.body;
    const userDetails = validateToken(token);
    // console.log('userdetails validation response', userDetails);
    // console.log('response of add user validation', userDetails);
    if (userDetails) {
      const hasPassword = await genHashPassword(password);
      delete req.body.token;
      const respose = await addAstrologer({ ...req.body, password: hasPassword }, userDetails, password);
      if (respose) {
        res.statusCode = 200;
        res.send(JSON.stringify(respose));
      }
    } else {
      res.send('Invalid token');
    }
  } catch (e) {
    console.log('error in user registration', e);
    res.statusCode = 400;
    res.send(JSON.stringify(e));
    throw e;
  }
};
