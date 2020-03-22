import addEnquiry from '../../api/addQnquiry';

export default async (req, res) => {
  console.log('req called', req.body);
  try {
    const record = req.body;
    const mainres = await addEnquiry(record);
    res.statusCode = 200;
    res.send(JSON.stringify(mainres));
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.send('Enquiry insertion faild');
  }
};
