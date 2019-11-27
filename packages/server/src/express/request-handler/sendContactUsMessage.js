import sendContactUsMessage from '../../api/sendContactUsMessage';

export default async (req, res) => {
  // console.log('send message is called', req.body);
  try {
    const result = await sendContactUsMessage(req.body);
    if (result) {
      res.statusCode = 200;
      res.send(JSON.stringify(result));
    }
  } catch (e) {
    res.statusCode = 500;
    res.send(JSON.stringify(e));
  }
};
