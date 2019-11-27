import uuid from 'uuid';
import db from '../db';

export default async (record) => {

  const respose = await db.execute(async ({ insert, findOne, update }) => {
    // console.log('add user api called', record);
    const { firstName, gender, dob, time, country, city, state, accurateTime, registrationToken, uid } = record;

    if (registrationToken && registrationToken !== 'null') {
      const findOneRes = await findOne('BidhaUser', { firstName, gender, dob, time, country, city, state, accurateTime, registrationToken, id: uid });
      if (findOneRes) {
        delete record.uid;
        await update('BidhaUser', record, { id: uid });
        return 'Profile successfully updated';
      }
      delete record.uid;
      const res = await insert('BidhaUser', record);
      return { updateId: res };
    }
    if (!registrationToken || registrationToken === 'null') {
      const token = uuid();
      delete record.uid;
      const res = await insert('BidhaUser', { ...record, registrationToken: token, registrationDateTime: Date.now() });
      return { uid: res, token };
    }
  });
  return respose;
};
