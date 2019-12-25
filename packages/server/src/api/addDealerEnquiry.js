import db from '../db';

export default async (record) => {
  console.log('add dealer enquiry api called', record);
  const res = await db.execute(async ({ insert }) => {
    const insertRes = await insert('DealerEnquiry', record);
    return insertRes;
  });
  return res;
};
