import db from '../db';
import budgetRangeList, { cities } from './budgetRangeProvider';

export default async () => {
  console.log('fetch initial api called');
  const res = await db.execute(async ({ find, findOne }) => {
    const vehicalTypes = await find('ServiceType', { sid: 1 });
    const vehicleBrand = await find('ServiceTypeBrand', { sid: 1 });
    const vehicleBrandProduct = await find('ServiceTypeBrandProductDetails', { sid: 1 });
    const dealerList = await find('Dealer');
    const serviceCenterList = await find('ServiceCenter');
    const usedVehicle = await find('SellVehicle');
    return { vehicalTypes, vehicleBrand, vehicleBrandProduct, dealerList, serviceCenterList, cities, usedVehicle };
  });
  return { budgetRangeList, ...res };
};
