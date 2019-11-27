import validateToken from '../../auth/validateToken';
import deleteUser from '../../api/deleteUser';

export default async (req, res) => {
  const { userId, token } = req.query;
  try {
    if (validateToken(token)) {
      const delRes = await deleteUser(userId);
      // console.log('delete user response', res);
      if (delRes) {
        res.statusCode = 200;
        res.send('user Successfully deleted');
      }
    } else {
      res.statusCode = 400;
      res.send('Token Validation faild');
    }
  } catch (e) {
    res.statusCode = 400;
    res.send('userDeleteion faild');
  }
};
