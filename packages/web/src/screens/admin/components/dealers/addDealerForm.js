import React from 'react';
import { Card, Elevation, Dialog } from '@blueprintjs/core';
import Form from '../../../../components/common/Form';
import addDealerFormStructure from './addDealerFormStructure';

export default ({ isOpen, onClose, props, update }) => {
  return (
    <Dialog
      isOpen={isOpen}
      title="Enter Dealer Details"
      onClose={onClose}
      canOutsideClickClose={false}
      style={{ maxHeight: window.innerHeight * 0.9, overflowY: 'scroll' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card
          interactive
          elevation={Elevation.TWO}
          style={{
            maxWidth: '100%',
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
            <Form contents={addDealerFormStructure(props, update)} {...props} schema="addDealer" />
          </form>
        </Card>
      </div>
    </Dialog>
  );
};
