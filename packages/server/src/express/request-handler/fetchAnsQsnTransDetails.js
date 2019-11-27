import validateToken from '../../auth/validateToken';
import fetchNextAnsQsnTransDetails from '../../api/findNextAnsQuestionDetails';

export default async (req, res) => {
  const { token } = req.query;
  try {
    const user = validateToken(token);
    // console.log('fetch initial data web handler called', req.query.token, user);
    if (user) {
      const apiRes = await fetchNextAnsQsnTransDetails(user);
      // console.log('fetch ans trans details res', apiRes);
      res.statusCode = 200;
      res.send(JSON.stringify(apiRes));
    } else {
      res.send('authentication failded');
    }
  } catch (e) {
    console.log('Answer Question translation fetch error', e);
    throw new Error('Fetch initial data response faild');
  }
};
