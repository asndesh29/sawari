import db from '../db';
import budgetRangeList, { cities } from './budgetRangeProvider';

const arrSchema = [
  'CarVarientOverview',
  'CarVarientKeySpecification',
  'CarVarientEngineTransmission',
  'CarVarientFuelPerformance',
  'CarVarientSuspensionSteeringBreak',
  'CarVarientDimentionCapacity',
  'CarVarientKeyFeatures',
  'CarVarientComfortConvenience',
  'CarVarientInterior',
  'CarVarientExterior',
  'CarVarientSafty',
  'CarVarientEntertainmentCommunication',
];

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

export default async () => {
  // console.log('fetch initial api called');
  const res = await db.execute(async ({ find, findOne }) => {
    const vehicalTypes = await find('ServiceType', { sid: 1 });
    const vehicleBrand = await find('ServiceTypeBrand', { sid: 1 });
    const vehicleBrandProduct = await find('ServiceTypeBrandProductDetails', { sid: 1 });
    const dealerList = await find('Dealer');
    const serviceCenterList = await find('ServiceCenter');
    const usedVehicle = await find('SellVehicle');
    const vehicleModel = await find('ServiceTypeBrandModel');
    // console.log('vehicle models', vehicleModel);
    const varientListPromises = [];
    vehicleModel.forEach((vm) => {
      varientListPromises.push(find('ServiceTypeBrandModelVarient', { modelId: vm.id }));
    });
    const vehicleVarientList = await Promise.all(varientListPromises);
    // console.log('vehicle varient list', vehicleVarientList);

    const finalVehicleModel = vehicleModel.reduce((arr, n, idx) => {
      arr = [...arr, { ...n, varients: vehicleVarientList[idx] } ];
      return arr;
    }, []);
    // console.log('vehiclemodel list with varient', finalVehicleModel);
    const bikeDataPromises = [];
    arrBike.forEach((bt) => bikeDataPromises.push(find(bt)));
    const bikeDataValue = await Promise.all(bikeDataPromises);
    const mainBikeData = arrBike.reduce((obj, n, idx) => {
      obj[n] = bikeDataValue[idx];
      return obj;
    }, {});

    const carDataPromises = [];
    arrSchema.forEach((bt) => carDataPromises.push(find(bt)));
    const carDataValue = await Promise.all(carDataPromises);
    const mainCarData = arrSchema.reduce((obj, n, idx) => {
      obj[n] = carDataValue[idx];
      return obj;
    }, {});

    return { ...mainBikeData, ...mainCarData, vehicalTypes, vehicleBrand, vehicleBrandProduct, dealerList, serviceCenterList, cities, usedVehicle, vehicleModel: finalVehicleModel };
  });
  return { budgetRangeList, ...res };
};
