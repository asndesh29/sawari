import db from '../db';

export default async (registrationToken) => {
  // console.log('fetch free question api called', registrationToken);
  const res = await db.execute(async ({ find }) => {
    const freeQuestion = await find('FreeQuestion', { registrationToken }) || [];
    return freeQuestion;
  });
  return res;
};
