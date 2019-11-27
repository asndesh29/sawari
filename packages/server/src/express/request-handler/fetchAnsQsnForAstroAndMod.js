import validateToken from '../../auth/validateToken';
import fetchAnsQsnTransDetails from '../../api/fetchAnsQsnForAstroAndMod';

export default async (req, res) => {
  const { token } = req.query;
  try {
    const user = validateToken(token);
    // console.log('fetch ans qsn for mod and astro called data web handler called', req.query.token, user);
    if (user) {
      const apiRes = await fetchAnsQsnTransDetails(user);
      // console.log('fetch ans trans details res', apiRes);
      res.statusCode = 200;
      res.send(JSON.stringify(apiRes));
    } else {
      res.send('authentication failded');
    }
  } catch (e) {
    throw new Error('Fetch initial data response faild');
  }
};
