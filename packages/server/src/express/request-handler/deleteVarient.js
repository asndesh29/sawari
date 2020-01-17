import validateToken from '../../auth/validateToken';
import deleteVarient from '../../api/deleteVarient';

export default async (req, res) => {
  const { token, id, stypeId } = req.query;
  try {
    const userValidateRes = await validateToken(token);
    const response = await deleteVarient({ id, stypeId });
    if (response) {
      res.statusCode = 200;
      res.send('response');
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('faild to delete');
  }
};
