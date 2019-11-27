import validateToken from '../../auth/validateToken';
import fetchReport from '../../api/fetchReport';

export default async (req, res) => {
  try {
    const { token, startDate, endDate, modAstroId } = req.query;
    // console.log('registration token', token, startDate, endDate, modAstroId);
    const user = validateToken(token);
    // console.log('fetch initial data web handler called', req.query.token, user);
    if (user) {
      const apiRes = await fetchReport(startDate, endDate, modAstroId);
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
