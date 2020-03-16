import fetchAdminData from '../../api/fetchAdminData';

export default async (req, res) => {
  console.log('fetch admin initialdata called', req.query);
  try {
    const adminData = await fetchAdminData();
    res.statusCode = 200;
    res.send(adminData);
  } catch (e) {
    res.statusCode = 500;
    res.send('Faild to fetch admin data');
    console.log(e);
  }
};
 