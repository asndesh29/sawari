import { fetchInitialWebData } from '../../api';

export default async (req, res) => {
  // console.log('fetch initial data req', req);
  try {
    const initialData = await fetchInitialWebData();
    res.statusCode = 200;
    res.send(initialData);
  } catch (e) {
    res.statusCode = 500;
    res.send('Faild to fetch data');
  }
};
