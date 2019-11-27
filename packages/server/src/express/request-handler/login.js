import login from '../../auth/login';
import db from '../../db';

export default async (req, res) => {
  try {
    const record = req.body;
    // console.log('login route called', record);
    const status = await login(record);
    if (status) {
      db.execute(async ({ insert }) => {
        insert('LoginStatus', { userId: status.id, timeStamp: Date.now(), type: 'login' });
      });
      res.send(status);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
