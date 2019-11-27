import fetchFreeQuestion from '../../api/fetchFreeQuestion';

export default async (req, res) => {
  try {
    // console.log('fetchIntial data called', req.query.reg_token);
    const result = await fetchFreeQuestion(req.query.registrationToken);
    if (result) {
      res.statusCode = 200;
      res.send(JSON.stringify(result));
    }
  } catch (e) {
    console.log('error in fetch free Question request handler', e);
    res.statusCode = 400;
    res.send('Failed to fetch data');
  }
};
