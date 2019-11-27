
import fetchAnsQsnTranslator from './fetchAnsQsnTransDetails';

export default async (userDetail) => {
  const details = await fetchAnsQsnTranslator(null, null, null, 'paidOnly', userDetail.userId);
  return details;
};
