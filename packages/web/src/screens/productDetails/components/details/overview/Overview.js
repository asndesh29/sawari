import React from 'react';
import { Card } from '@blueprintjs/core';
import {IoMdSpeedometer } from 'react-icons/io';
import { GiVendingMachine, GiMoneyStack } from 'react-icons/gi';
import { FaBolt, FaTransgender } from 'react-icons/fa';
import { MdAirlineSeatLegroomExtra } from 'react-icons/md';
import productDetailsObj from '../productDetailsObj';

const iconAndUnitHandler = (key) => {
  switch (key) {
    case 'mileage':
      return { icon: <IoMdSpeedometer size={30} color="#9a9a9a" />, unit: 'Km/Kg', preUnit: '' };
    case 'engine':
      return { icon: <GiVendingMachine size={30} color="#9a9a9a" />, unit: 'cc', preUnit: '' };
    case 'BHP':
      return { icon: <FaBolt size={30} color="#9a9a9a" />, unit: '', preUnit: '' };
    case 'transmission':
      return { icon: <FaTransgender size={30} color="#9a9a9a" />, unit: '', preUnit: ''};
    case 'seats':
      return { icon: <MdAirlineSeatLegroomExtra size={30} color="#9a9a9a" />, unit: '', preUnit: '' };
    case 'serviceCost':
      return { icon: <GiMoneyStack size={30} color="#9a9a9a" />, unit: '/yr', preUnit: 'NRs.' };
    default:
      return { icon: <IoMdSpeedometer />, unit: '' };
  }
};

const overviewElement = (label, key, obj) => {
  return (
    <div className="overview-element">
      {iconAndUnitHandler(key).icon}
      <span style={{ color: '#9a9a9a', marginBottom: 5 }}>{label}</span>
      <span>{`${iconAndUnitHandler(key).preUnit} ${obj[key]} ${iconAndUnitHandler(key).unit}`}</span>
    </div>
  );
};

export default () => {
  return (
    <div className="overview">
      {Object.values(productDetailsObj.overview.labels).map((l, idx) => overviewElement(l, Object.keys(productDetailsObj.overview.labels)[idx], productDetailsObj.overview))}
    </div>
  );
};
