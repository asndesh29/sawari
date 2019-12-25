import addServiceCenterEnquiry from '../../api/addServceCenterEnquiry';

export default async (req, res) => {
  console.log('req called');
  try {
    const record = req.body;
    const mainres = await addServiceCenterEnquiry(record);
    res.statusCode = 200;
    res.send(JSON.stringify(mainres));
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.send('Enquiry insertion faild');
  }
};
