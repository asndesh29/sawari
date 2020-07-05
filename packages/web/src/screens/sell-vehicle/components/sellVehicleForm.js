import React from 'react';
import { Card, Elevation, Dialog } from '@blueprintjs/core';
import Form from '../../../components/common/Form';
import sellVehicleStructure from './sellVehicleFormStructure';

export default ({ props }) => {
  // console.log('props in form', props);
  return (
    <div className="sell-vehicle-content ">
      <Card
        // interactive
        elevation={Elevation.TWO}
        className="content-card"
      >
        <h2>Sell your vehicle in a click!</h2>
        <form style={{ width: '100%' }}>
          <Form contents={sellVehicleStructure(props)} {...props} schema="sellVehicle" />
        </form>
      </Card>
    </div>
  );
};
