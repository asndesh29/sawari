import React from 'react';
import { Dialog, Card, Elevation } from '@blueprintjs/core';
import Form from '../../../components/common/Form';

const addDetailsStructure = () => [
  {
    element: 'input', placeHolder: 'Enter your name...', value: 'name', type: 'text', label: 'Name:',
  },
  {
    element: 'input', placeHolder: 'Enter your Email', value: 'email', type: 'email', label: 'Email:',
  },
  {
    element: 'input', placeHolder: 'Enter your phone no...', value: 'phoneno', type: 'number', label: 'Phone No:',
  },
  {
    element: 'input', placeHolder: 'Enter your address', value: 'address', type: 'text', label: 'Address:',
  },
  {
    element: 'textArea', placeHolder: 'Enter your message', value: 'message', type: 'text', label: 'Message:',
  },
  {
    element: 'button', text: 'Submit Enquiry', intent: 'PRIMARY',
  },
];

export default ({ isOpen, onClose, props }) => {
  console.log('details in form enquiry', props.form.addEnquiry);
  return (
    <Dialog
      isOpen={isOpen}
      title="Enter Your Details"
      onClose={onClose}
      canOutsideClickClose={false}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card
          interactive
          elevation={Elevation.TWO}
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            margin: 10,
            marginBottom: 0,
            flexDirection: 'column',
          }}
        >
          <form style={{ width: '100%' }}>
            <Form contents={addDetailsStructure()} schema="addEnquiry" {...props} />
          </form>
        </Card>
      </div>
    </Dialog>
  );
};
