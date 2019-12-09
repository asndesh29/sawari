import login from '../../auth/login';
import db from '../../db';

export default async (req, res) => {
  try {
    const record = req.body;
    // console.log('login route called', record);
    const status = await login(record);
    if (status) {
      res.statusCode = 200;
      res.send(status);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
