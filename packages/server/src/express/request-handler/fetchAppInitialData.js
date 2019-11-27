import fetchInitialData from '../../api/fetchAppInitialData';

export default async (req, res) => {
  try {
    // console.log('fetchIntial data called', req.query.reg_token);
    const result = await fetchInitialData(req.query.reg_token);
    if (result) {
      res.statusCode = 200;
      res.send(JSON.stringify(result));
    }
  } catch (e) {
    console.log('error in fetch init request handler', e);
    res.statusCode = 400;
    res.send('Failed to fetch data');
  }
};
