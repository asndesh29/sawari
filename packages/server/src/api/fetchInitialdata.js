import db from '../db';
import budgetRangeList from './budgetRangeProvider';

export default async () => {
  console.log('fetch initial api called');
  const res = await db.execute(async ({ find, findOne }) => {
    const vehicalTypes = await find('ServiceType', { sid: 1 });
    const vehicleBrand = await find('ServiceTypeBrand', { sid: 1 });
    const vehicleBrandProduct = await find('ServiceTypeBrandProductDetails', { sid: 1 });
    return { vehicalTypes, vehicleBrand, vehicleBrandProduct };
  });
  return { budgetRangeList, ...res };
};
