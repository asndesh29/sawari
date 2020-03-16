import React from 'react';
import { IoMdSpeedometer } from 'react-icons/io';
import PropTypes from 'prop-types';
import { GiMoneyStack } from 'react-icons/gi';
import { FaBolt, FaTransgender, FaSafari, FaCompactDisc, FaRoad, FaKey } from 'react-icons/fa';
import { MdAirlineSeatLegroomExtra } from 'react-icons/md';
import { FiCalendar } from 'react-icons/fi';

const overview = { kmsDriven: 'KMs Driven', displacement: 'Displacement', makeYear: 'Make Year', ownerShip: 'Owner' };

const iconAndUnitHandler = (key) => {
  switch (key) {
    case 'kmsDriven':
      return { icon: <FaRoad size={30} color="#9a9a9a" />, unit: 'Kms', preUnit: '' };
    case 'makeYear':
      return { icon: <FiCalendar size={30} color="#9a9a9a" />, unit: '', preUnit: '' };
    case 'ownerShip':
      return { icon: <FaKey size={30} color="#9a9a9a" />, unit: '', preUnit: '' };
    case 'displacement':
      return { icon: <FaTransgender size={30} color="#9a9a9a" />, unit: 'cc', preUnit: '' };
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
      return { icon: <IoMdSpeedometer />, unit: '', preUnit: '' };
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

const Overview = (props) => {
  const { currentUsedVehicleDetails } = props;
  return (
    <div className="overview">
      {
        Object.values(overview).map((l, idx) => overviewElement(l, Object.keys(overview)[idx], currentUsedVehicleDetails))
      }
    </div>
  );
};

export default Overview;

Overview.propTypes = {
  currentUsedVehicleDetails: PropTypes.objectOf(PropTypes.any).isRequired,
};
