import cache from '../cache';
import db from '../db';

export default async function logout(record, user) {
  // console.log('logout handler called', record, user);
  cache.users.del(user.token);
  return 'Sign out done';
}
