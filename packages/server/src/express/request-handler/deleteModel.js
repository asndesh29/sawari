import validateToken from '../../auth/validateToken';
import deleteModel from '../../api/deleteModel';

export default async (req, res) => {
  const { token, id } = req.query;
  try {
    console.log('delete brand called', req.query);
    const userValidateRes = await validateToken(token);
    const response = await deleteModel(parseInt(id, 10));
    if (response) {
      res.statusCode = 200;
      res.send('response');
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('faild to delete');
  }
};
