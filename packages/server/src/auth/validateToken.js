import cache from '../cache';

export default function validateToken(token) {
  try {
    const user = cache.users.get(`${token}`);
    if (!user) {
      throw new Error('Athentication faild')
    }
    return user;
  } catch (e) {
    throw new Error('validation faild');
  }
}
