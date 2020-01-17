import validateToken from '../../auth/validateToken';
import addVarient from '../../api/addVarient';

export default async (req, res) => {
  console.log('add varient called', req.body);
  try {
    const data = req.body;
    const { token, schema } = data;
    const user = await validateToken(token);
    delete data.token;
    const apiRes = await addVarient({ ...data, userId: user.id });
    res.statusCode = 200;
    res.send(JSON.stringify(apiRes));
  } catch (e) {
    console.log('error in add udpate profile user', e);
    res.statusCode = 400;
    res.send(JSON.stringify(e));
  }
};
