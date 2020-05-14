import db from '../db';

export default (schema) => {
  const res = db.execute(async ({ find }) => {
    const result = await find(schema);
    return result;
  });
  return res;
};
