
import sendEmail from '../../api/sendEmail';

export default async (req, res) => {
  console.log('multi sarch req', req.body);
  try {
    const apiRes = await sendEmail(req.body);
    res.statusCode = 200;
    res.send(JSON.stringify(apiRes));
  } catch (e) {
    console.log('error in fetch multi search', e);
    res.statusCode = 500;
    res.send('Error in multi search');
  }
};
