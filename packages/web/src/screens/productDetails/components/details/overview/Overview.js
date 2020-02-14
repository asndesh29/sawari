import React from 'react';
import { Card } from '@blueprintjs/core';
import { IoMdSpeedometer } from 'react-icons/io';
import { GiVendingMachine, GiMoneyStack } from 'react-icons/gi';
import { FaBolt, FaTransgender, FaSafari, FaCompactDisc } from 'react-icons/fa';
import { MdAirlineSeatLegroomExtra } from 'react-icons/md';
import productDetailsObj from '../productDetailsObj';
import bikeDetailsObj from '../bikeDetailsObj';

const iconAndUnitHandler = (key) => {
  switch (key) {
    case 'mileage':
      return { icon: <IoMdSpeedometer size={30} color="#9a9a9a" />, unit: 'kmpl', preUnit: '' };
    case 'engine':
      return { icon: <GiVendingMachine size={30} color="#9a9a9a" />, unit: 'cc', preUnit: '' };
    case 'BHP':
      return { icon: <FaBolt size={30} color="#9a9a9a" />, unit: '', preUnit: '' };
    case 'transmission':
      return { icon: <FaTransgender size={30} color="#9a9a9a" />, unit: '', preUnit: '' };
    case 'seats':
      return { icon: <MdAirlineSeatLegroomExtra size={30} color="#9a9a9a" />, unit: '', preUnit: '' };
    case 'serviceCost':
      return { icon: <GiMoneyStack size={30} color="#9a9a9a" />, unit: '/yr', preUnit: 'NRs.' };
    case 'power':
      return { icon: <FaBolt size={30} color="#9a9a9a" />, unit: 'PS', preUnit: '' };
    case 'torque':
      return { icon: <FaTransgender size={30} color="#9a9a9a" />, unit: 'Nm', preUnit: '' };
    case 'tyreType':
      return { icon: <FaSafari size={30} color="#9a9a9a" />, unit: '', preUnit: '' };
    case 'brakes':
      return { icon: <FaCompactDisc size={30} color="#9a9a9a" />, unit: '', preUnit: '' };
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

export default (props) => {
  const { main, currentProductDetails, variantId } = props;
  const { stypeId, varients } = currentProductDetails;
  let overview = {};
  if (parseInt(stypeId, 10) === 1) {
    overview = main.initialData.CarVarientOverview.find(cv => cv.varientId === variantId);
  }
  if (parseInt(stypeId, 10) === 2) {
    overview = main.initialData.BikeVarientOverview.find(cv => cv.varientId === variantId);
  }

  console.log('OVERVIEW', overview);
  return (
    <div className="overview">
      {(parseInt(stypeId, 10) === 1)
        ? Object.values(productDetailsObj.overview.labels).map((l, idx) => overviewElement(l, Object.keys(productDetailsObj.overview.labels)[idx], overview))
        : Object.values(bikeDetailsObj.overview.labels).map((l, idx) => overviewElement(l, Object.keys(bikeDetailsObj.overview.labels)[idx], overview))
      }
    </div>
  );
};
