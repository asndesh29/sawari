import addDealerEnquiry from '../../api/addDealerEnquiry';

export default async (req, res) => {
  console.log('addDealer Enquiry caleld', req.body);
  try {
    const record = req.body;
    const mainres = await addDealerEnquiry(record);
    res.statusCode = 200;
    res.send(JSON.stringify(mainres));
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.send('Enquiry insertion faild');
  }
};
