import validateToken from '../../auth/validateToken';
import deleteNews from '../../api/deleteNews';

export default async (req, res) => {
  const { token, id } = req.query;
  try {
    console.log('delete  news called', req.query);
    const userValidateRes = await validateToken(token);
    const response = await deleteNews(parseInt(id, 10));
    if (response) {
      res.statusCode = 200;
      res.send(JSON.stringify(response));
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('faild to delete');
  }
};
