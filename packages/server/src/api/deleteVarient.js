import db from '../db';

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

export default async (record) => {
  console.log('delete varient api called', record);
  const { id, stypeId } = record;
  try {
    const result = await db.execute(async ({ deleteQuery }) => {
      const deletePromises = [];
      if (parseInt(stypeId, 10) === 1) {
        arrSchema.forEach((s) => deletePromises.push(deleteQuery(s, { varientId: parseInt(id, 10) })));
      }
      if (parseInt(stypeId, 10) === 2) {
        arrBike.forEach((s) => deletePromises.push(deleteQuery(s, { varientId: parseInt(id, 10) })));
      }
      await Promise.all(deletePromises);
      const delRes = await deleteQuery('ServiceTypeBrandModelVarient', { id: parseInt(id, 10) });

      if (delRes) {
        return delRes;
      }
      throw 'brand deletion faild';
    });
    return result;
  } catch (e) {
    console.log('error in delete brand api', e);
    throw e;
  }
};
