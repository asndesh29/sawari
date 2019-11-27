export default async function executeSql(db, sql, params) {
  const res = await db.all(sql, ...params);
  return res;
}
