import validateToken from '../../auth/validateToken';
import addUpateUser from '../../api/addUpateUser';

export default async (req, res) => {
  const { token, id } = req.query;
  try {
    console.log('delete brand called', req.query);
    const userValidateRes = await validateToken(token);
    const response = await addUpateUser({ id: parseInt(id, 10), deleteStatus: 1 });
    if (response) {
      res.statusCode = 200;
      res.send('response');
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('faild to delete');
  }
};
