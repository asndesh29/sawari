import validateToken from '../../auth/validateToken';

export default async (req, res) => {
  const { token, userId } = req.query;
  // console.log('user id in fetch question list handler', token, userId);
  res.send('fetch success');
};
