import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'select',
      value: 'bodyType',
      options: [
        { label: 'Scooter', value: 'Scooter' },
        { label: 'Street', value: 'Street' },
        { label: 'Cruiser', value: 'Cruiser' },
        { label: 'Sport', value: 'Sport' },
      ],
      placeHolder: 'Select Body Type',
    },
    {
      element: 'select',
      value: 'fuelType',
      options: [
        { label: 'Petrol', value: 'Petrol' },
        { label: 'Diesel', value: 'Diesel' },
        { label: 'CNG', value: 'CNG' },
        { label: 'LPG', value: 'LPG' },
        { label: 'Electric', value: 'Electric' },
        { label: 'Hybrid', value: 'Hybrid' },
      ],
      placeHolder: 'Select Fuel Type',
    },
    {
      element: 'input', placeHolder: 'Enter name...', value: 'name', type: 'text', label: 'Name:',
    },
    {
      element: 'input', placeHolder: 'Enter exShowRoom Price...', value: 'exShowRoomPrice', type: 'number', label: 'ExShowRoom Price',
    },
    {
      element: 'input', placeHolder: 'Enter onRoad Price Price...', value: 'onRoadPrice', type: 'number', label: 'onRoad Price',
    },
    {
      element: 'button', text: update ? 'Update' : 'Add', intent: 'PRIMARY',
    },
  ];
};

export default (allProps) => {
  const { schema, props } = allProps;
  return (
    <div style={{ width: '50vw', height: '80vh', background: '#f5f5f5', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Main Varient Details</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
