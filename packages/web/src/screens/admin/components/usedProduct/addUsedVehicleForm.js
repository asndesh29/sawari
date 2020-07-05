import React from 'react';
import { Card, Elevation, Dialog } from '@blueprintjs/core';
import Form from '../../../../components/common/Form';
import addBrandStructure from './addUsedVehicleStructure';

export default ({ isOpen, onClose, props, update }) => {
  return (
    <Dialog
      isOpen={isOpen}
      title="Enter Used Vehicle Details"
      onClose={onClose}
      canOutsideClickClose={false}
      style={{ height: window.innerHeight * 0.9, overflow: 'scroll' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card
          interactive
          elevation={Elevation.TWO}
          style={{
            maxWidth: '100%',
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
          <form style={{ width: '100%' }}>
            <Form contents={addBrandStructure(props, update)} {...props} schema="sellVehicle" />
          </form>
        </Card>
      </div>
    </Dialog>
  );
};
