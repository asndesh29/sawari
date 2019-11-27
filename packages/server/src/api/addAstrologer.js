import mailer from '../mailer';
import db from '../db';
import htmlString from '../mailer/html/mailBody';

export default async (record, userDetails, password) => {
  if (userDetails.type === 'super' || userDetails.type === 'admin') {
    try {
      const htmlStringValue = await htmlString(record.userName, password, record.type);
      const respose = await db.execute(async ({ insert }) => {
        const res = await insert('User', record);
        const astroRes = await insert('Astrologer', { userId: res, name: '', gender: '', experience: '', qualification: '', phoneNo: '', image: '', password });
        if (res && astroRes) {
          mailer({
            from: 'Bidha<info.bidha.123@gmail.com>',
            to: `<${record.userName}>`,
            subject: 'User Registration',
            text: 'No reply',
            html: htmlStringValue,
          });
        }
        return res;
      });
      return respose;
    } catch (e) {
      console.log(e);
      throw new Error('data access faild');
    }
  }
  return 'Authorization faild';
};
