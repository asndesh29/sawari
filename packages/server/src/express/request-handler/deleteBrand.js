import validateToken from '../../auth/validateToken';
import deleteBrand from '../../api/deleteBrand';

export default async (req, res) => {
  const { token, id } = req.query;
  try {
    console.log('delete brand called', req.query);
    const userValidateRes = await validateToken(token);
    const response = await deleteBrand(parseInt(id, 10));
    if (response) {
      res.statusCode = 200;
      res.send('response');
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('faild to delete');
  }
};
