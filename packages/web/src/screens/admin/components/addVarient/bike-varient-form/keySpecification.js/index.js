import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter mileage...', value: 'mileage', type: 'number', label: 'Mileage:',
    },
    {
      element: 'input', placeHolder: 'Enter engine type...', value: 'engineType', type: 'text', label: 'Engine Type:',
    },
    {
      element: 'input', placeHolder: 'Enter displacement...', value: 'displacement', type: 'text', label: 'Displacement:',
    },
    {
      element: 'input', placeHolder: 'Enter No. of Cylinders...', value: 'noOfCylinders', type: 'text', label: 'No. of Cylinders:',
    },
    {
      element: 'input', placeHolder: 'Enter MaxPower...', value: 'maxPower', type: 'text', label: 'Max Power:',
    },
    {
      element: 'input', placeHolder: 'Enter max torque...', value: 'maxTorque', type: 'text', label: 'Max Torque:',
    },
    {
      element: 'input', placeHolder: 'Enter front brake...', value: 'frontBrake', type: 'text', label: 'Front Brake:',
    },
    {
      element: 'input', placeHolder: 'Enter rear brake...', value: 'rearBrake', type: 'text', label: 'Rear Brake:',
    },
    {
      element: 'input', placeHolder: 'Enter fuel capacity...', value: 'fuelCapacity', type: 'text', label: 'Fuel Capacity:',
    },
    {
      element: 'input', placeHolder: 'Enter body type...', value: 'bodyType', type: 'text', label: 'Body Type:',
    },
    {
      element: 'button', text: update ? 'Update' : 'Add', intent: 'PRIMARY',
    },
  ];
};

export default (allProps) => {
  const { schema, props } = allProps;
  console.log('props in main varient form', props);
  return (
    <div style={{ width: '50vw', height: '80vh', background: '#f5f5f5', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Key Specifications</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
