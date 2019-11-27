import db from '../db';
import sendNotificaiton from './sendNotification';

export default async (record) => {
  const { fcmToken, firstName, freeQuestionId } = record;
  // console.log('fcmToken in addQuesiton api', record);
  delete record.fcmToken;
  delete record.firstName;
  if (freeQuestionId) {
    delete record.freeQuestionId;
  }
  const response = await db.execute(async ({ insert, update, find }) => {
    if (record.id) {
      const updatRes = await update('UserQuestion', { paymentStatus: record.paymentStatus }, { id: record.id });
      return updatRes;
    }
    const insertRes = await insert('UserQuestion', { ...record, locker: false });
    if (insertRes) {
      const allAskQuestion = await find('UserQuestion', { registrationToken: record.registrationToken }) || [];
      // console.log('isFirstQuestion', allAskQuestion);
      const allPaid = allAskQuestion.filter(uq => uq.type === 'paid' && uq.paymentStatus === '1');
      const allFree = allAskQuestion.filter(uq => uq.type === 'free' && uq.paymentStatus === '1');
      if (allPaid.length === 1 && allFree.length === 0) {
        sendNotificaiton({
          notiBody: 'Congratulation you got one free Question',
          notiTitle: 'Bidha',
          message: 'Congratulation you got one free Question',
          freeQuestion: 1,
          users: [{ fbToken: fcmToken, id: record.userId, registrationToken: record.registrationToken }],
        });
      }
      if (record.paymentStatus) {
        sendNotificaiton({
          notiBody: 'You have one notification please check your inbox.',
          notiTitle: 'Bidha',
          message: `Thank you!  ${firstName}
          One of our astrologer shall respond to your query within 24 hours.`,
          freeQuestion: 0,
          users: [{ fbToken: fcmToken, id: record.userId, registrationToken: record.registrationToken }],
        });
      }
    }
    if (freeQuestionId) {
      update('FreeQuestion', { status: 0 }, { id: freeQuestionId });
    }
    return insertRes;
  });
  return response;
};
