import React from 'react';
import { ENDPOINT } from '../../../config';

export default (props) => {
  console.log('details in car deails', props);
  const { main } = props;
  const { currentCarDetail } = main;
  return (
    <div className="image-details">
      <img src={`${ENDPOINT}/images/${currentCarDetail.image}`} alt={currentCarDetail.name} />
      <div className="details">
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Name:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentCarDetail.name}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Price:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentCarDetail.price}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Displacement:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentCarDetail.displacement}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Power:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentCarDetail.power}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Torque:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentCarDetail.torque}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Fuel Tank Capacity:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentCarDetail.fueltankCapacity}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Battery:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentCarDetail.battery}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Tyre:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentCarDetail.tyre}
          </span>
        </span>
        <br />
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>
          Ground Clearance:
          <span style={{ fontWeight: 'normal', marginLeft: 5 }}>
            {currentCarDetail.groundClearance}
          </span>
        </span>
        <br />
      </div>
    </div>
  );
};
