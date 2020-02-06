import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import Main from './main/';
import Overview from './overview/';
import KeySpecification from './keySpecification.js';
import KeyFeaturs from './keyFeaturs/';
import EngineTransmission from './engineTransmission/';
import FeatreSafety from './features-safety';
import MileagePerformance from './mileagePerformance';
import ChassisSuspension from './chassisSuspension';
import DimensionsCapacity from './dimentionsCapacity';
import Electricals from './electricals';
import TyresBrakes from './tyresBrakes';
import DiscountOffer from '../car-varient-form/discountOffer';

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
  'BikeVarientTyresBrakes'
];

export default ({ allProps, handleTabChange, selectedTabId }) => {
  console.log('car Specificaion form', props);
  const { props } = allProps;
  return (
    <Tabs vertical id="TabsExample" onChange={handleTabChange} selectedTabId={selectedTabId}>
      <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="main" title="Main" panel={<Main {...allProps} schema='ServiceTypeBrandModelVarient' />} />
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="overview" title="Overview" panel={<Overview {...allProps} schema="BikeVarientOverview" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="keySpecification" title="Key Specification" panel={<KeySpecification {...allProps} schema="BikeVarientKeySpecification" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="keyFeaturs" title="Key Featurs" panel={<KeyFeaturs {...allProps} schema="BikeVarientKeyFeaturs" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="engineTransmission" title="Engine Transmission" panel={<EngineTransmission {...allProps} schema="BikeVarientEngineTransmission" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="featreSafety" title="Featre Safety" panel={<FeatreSafety {...allProps} schema="BikeVarientFeatursSafety" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="mileagePerformance" title="Mileage Performance" panel={<MileagePerformance {...allProps} schema="BikeVarientMileagePerformance" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="dimensionsCapacity" title="Dimensions & Capacity" panel={<DimensionsCapacity {...allProps} schema="BikeVarientDimensionCapacity" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="ChassisSuspension" title="Chassis Suspension" panel={<ChassisSuspension {...allProps} schema="BikeVarientChassisSuspension" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="electricals" title="Electricals" panel={<Electricals {...allProps}  schema="BikeVarientElectricals" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="tyresBrakes" title="Tyres Brakes" panel={<TyresBrakes {...allProps} schema="BikeVarientTyresBrakes" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="discountOffer" title="Discount And Offers" panel={<DiscountOffer {...allProps} schema="DiscountOffer" />} />}
    </Tabs>
  );
};
