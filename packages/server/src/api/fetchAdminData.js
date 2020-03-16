import db from '../db';
import { cities } from './budgetRangeProvider';

const arrBike = [
  'BikeVarientOverview',
  'BikeVarientKeySpecification',
  'BikeVarientKeyFeaturs',
  'BikeVarientEngineTransmission',
  'BikeVarientFeatursSafety',
  'BikeVarientMileagePerformance',
  'BikeVarientChassisSuspension',
  'BikeVarientDimensionCapacity',
  'BikeVarientElectricals',
  'BikeVarientTyresBrakes',
];

export default async (record) => {
  console.log('fetch admin data api called');

  const res = await db.execute(async ({ findOne, find }) => {
    const vehicleType = await find('ServiceType', { sid: 1 });
    const vehicleBrand = await find('ServiceTypeBrand', { sid: 1 });
    const vehicleBrandProduct = await find('ServiceTypeBrandProductDetails', { sid: 1 });
    const userEnquiry = await find('UserEnquiry');
    const dealerList = await find('Dealer');
    const serviceCenterList = await find('ServiceCenter');
    const dealerEnquiry = await find('DealerEnquiry');
    const serviceCenterEnquiry = await find('ServiceCenterEnquiry');
    const vehicleModel = await find('ServiceTypeBrandModel');
    const vehicleVarientList = await find('ServiceTypeBrandModelVarient');
    const CarVarientOverview = await find('CarVarientOverview');
    const CarVarientKeySpecification = await find('CarVarientKeySpecification');
    const CarVarientKeyFeatures = await find('CarVarientKeyFeatures');
    const CarVarientEngineTransmission = await find('CarVarientEngineTransmission');
    const CarVarientFuelPerformance = await find('CarVarientFuelPerformance');
    const CarVarientSuspensionSteeringBreak = await find('CarVarientSuspensionSteeringBreak');
    const CarVarientDimentionCapacity = await find('CarVarientDimentionCapacity');
    const CarVarientComfortConvenience = await find('CarVarientComfortConvenience');
    const CarVarientInterior = await find('CarVarientInterior');
    const CarVarientExterior = await find('CarVarientExterior');
    const CarVarientSafty = await find('CarVarientSafty');
    const CarVarientEntertainmentCommunication = await find('CarVarientEntertainmentCommunication');
    const DiscountOffer = await find('DiscountOffer');
    const SellVehicle = await find('SellVehicle');
    const bikeDataPromises = [];
    arrBike.forEach((bt) => bikeDataPromises.push(find(bt)));
    const bikeDataValue = await Promise.all(bikeDataPromises);
    const mainBikeData = arrBike.reduce((obj, n, idx) => {
      obj[n] = bikeDataValue[idx];
      return obj;
    }, {});

    return {
      vehicleVarientList,
      vehicleBrand,
      vehicleType,
      vehicleBrandProduct,
      userEnquiry,
      cities,
      dealerList,
      vehicleModel,
      serviceCenterList,
      dealerEnquiry,
      serviceCenterEnquiry,
      CarVarientOverview,
      CarVarientKeySpecification,
      CarVarientKeyFeatures,
      CarVarientEngineTransmission,
      CarVarientFuelPerformance,
      CarVarientSuspensionSteeringBreak,
      CarVarientDimentionCapacity,
      CarVarientComfortConvenience,
      CarVarientInterior,
      CarVarientExterior,
      CarVarientSafty,
      CarVarientEntertainmentCommunication,
      DiscountOffer,
      SellVehicle,
      ...mainBikeData,
    };
  });
  return res;
};
