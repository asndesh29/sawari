import validateToken from '../../auth/validateToken';
import deleteVideo from '../../api/deleteVideo';

export default async (req, res) => {
  const { token, id } = req.query;
  console.log('delete video called', id);
  try {
    await validateToken(token);
    const response = await deleteVideo({ id });
    if (response) {
      res.statusCode = 200;
      res.send('response');
    }
  } catch (e) {
    res.statusCode = 500;
    res.send('faild to delete');
  }
};
