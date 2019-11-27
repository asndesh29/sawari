import axios from 'axios';
import lodash from 'lodash';
import db from '../db';

export default async (record) => {
  // console.log('sendnotification called', record);
  const { users, message, freeQuestion } = record;
  const userRegistrationTokens = users.map(data => data.fbToken);
  // console.log('before remove', userRegistrationTokens);
  const removeDublicateToken = lodash.uniq(userRegistrationTokens);
  // console.log(removeDublicateToken);
  delete record.users;
  // console.log('records', record);
  try {
    db.execute(async ({ insert }) => {
      if (freeQuestion) {
        for (let i = 0; i < parseInt(freeQuestion, 10); i += 1) {
          insert('FreeQuestion', { userId: users[0].id, registrationToken: users[0].registrationToken, timeStamp: Date.now(), status: 1, noOfFreeQsn: 1 });
        }
      }
      insert('SystemMessage', { message, userId: users.length === 1 ? users[0].registrationToken : 1, timeStamp: Date.now() });
    });

    const res = await axios({
      url: 'https://fcm.googleapis.com/fcm/send',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'key=AIzaSyAcXJV1k5N5XFFzVC54GsAafk-S8CqmfDQ',
      },
      data: {
        registration_ids: removeDublicateToken,
        // collapse_key: 'type_a',
        data: { ...record, message: { message, userId: users.length === 1 ? users[0].id : 1, timeStamp: Date.now() }, freeQuestion: record.freeQuestion || 0 },
      },
    });
    return res.data;
  } catch (e) {
    console.log('Error in send notification api', e);
    throw e;
  }
};
