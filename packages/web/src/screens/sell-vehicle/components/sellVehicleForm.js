import React from 'react';
import { Card, Elevation, Dialog } from '@blueprintjs/core';
import Form from '../../../components/common/Form';
import sellVehicleStructure from './sellVehicleFormStructure';

export default ({ props }) => {
  console.log('props in form', props);
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <Card
        interactive
        elevation={Elevation.TWO}
        style={{
          maxWidth: '40%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          margin: 10,
          marginBottom: 0,
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        <h2>Sell your vehicle in a click!</h2>
        <form style={{ width: '100%' }}>
          <Form contents={sellVehicleStructure(props)} {...props} schema="addProduct" />
        </form>
      </Card>
    </div>
);
};
