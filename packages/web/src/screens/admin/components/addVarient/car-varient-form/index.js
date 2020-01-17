import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import Main from './main/';
import Overview from './overview/';
import KeySpecification from './keySpecification.js/';
import KeyFeaturs from './keyFeaturs/';
import EngineTransmission from './engineTransmission/';
import FuelPerformace from './fuelPerformance/';
import SuspensionSteeringBrakes from './suspensionSteeringBrakes';
import DimensionsCapacity from './dimentionsCapacity';
import ComfortConvenience from './comfortConvenience';
import Interior from './interior';
import Exterior from './exterior';
import Safety from './safety';
import EntertainmentCommunication from './entertainmentCommunication';

export default ({ allProps, handleTabChange, selectedTabId }) => {
  console.log('car Specificaion form', props);
  const { props } = allProps;
  return (
    <Tabs vertical id="TabsExample" onChange={handleTabChange} selectedTabId={selectedTabId}>
      <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="main" title="Main" panel={<Main {...allProps} schema='ServiceTypeBrandModelVarient' />} />
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="overview" title="Overview" panel={<Overview {...allProps} schema="CarVarientOverview" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="keySpecification" title="Key Specification" panel={<KeySpecification {...allProps} schema="CarVarientKeySpecification" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="keyFeaturs" title="Key Featurs" panel={<KeyFeaturs {...allProps} schema="CarVarientKeyFeatures" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="engineTransmission" title="Engine Transmission" panel={<EngineTransmission {...allProps} schema="CarVarientEngineTransmission" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="fuelPerformance" title="Fuel Performance" panel={<FuelPerformace {...allProps} schema="CarVarientFuelPerformance" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="suspensionSteeringBrakes" title="Suspension, Steering & Brakes" panel={<SuspensionSteeringBrakes {...allProps} schema="CarVarientSuspensionSteeringBreak" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="dimensionsCapacity" title="Dimensions & Capacity" panel={<DimensionsCapacity {...allProps} schema="CarVarientDimentionCapacity" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="comfortConvenience" title="Comfort & Convenience" panel={<ComfortConvenience {...allProps} schema="CarVarientComfortConvenience" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="interior" title="Interior" panel={<Interior {...allProps}  schema="CarVarientInterior" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="exterior" title="Exterior" panel={<Exterior {...allProps} schema="CarVarientExterior" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="safety" title="Safety" panel={<Safety {...allProps} schema="CarVarientSafty" />} />}
      {props.main.varientId && <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="entertainmentCommunication" title="Entertainment & Communication" panel={<EntertainmentCommunication {...allProps} schema="CarVarientEntertainmentCommunication" />} />}
    </Tabs>
  );
};
