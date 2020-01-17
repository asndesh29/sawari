import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter ARAI mileage...', value: 'ARAIMileage', type: 'text', label: 'ARAIMileage:',
    },
    {
      element: 'input', placeHolder: 'Enter fuel type...', value: 'fuelType', type: 'text', label: 'Fuel Type:',
    },
    {
      element: 'input', placeHolder: 'Enter displacement...', value: 'displacement', type: 'number', label: 'Displacement:',
    },
    {
      element: 'input', placeHolder: 'Enter max power...', value: 'maxPower', type: 'text', label: 'Max power:',
    },
    {
      element: 'input', placeHolder: 'Enter max torque...', value: 'maxTorque', type: 'text', label: 'Max Torque:',
    },
    {
      element: 'input', placeHolder: 'Enter Seating Capacity...', value: 'seatingCapacity', type: 'text', label: 'Seating Capacity:',
    },
    {
      element: 'input', placeHolder: 'Enter Transmission Type...', value: 'transmissionTYpe', type: 'text', label: 'Transmission Type:',
    },
    {
      element: 'input', placeHolder: 'Enter Boot Space...', value: 'bootSpace', type: 'text', label: 'Boot Space:',
    },
    {
      element: 'input', placeHolder: 'Enter Fuel Tank Capacity...', value: 'fuelTankCapacity', type: 'number', label: 'Fuel Tank Capacity:',
    },
    {
      element: 'input', placeHolder: 'Enter service cost...', value: 'serviceCost', type: 'number', label: 'Service Cost:',
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
