import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter fuelType...', value: 'fuelType', type: 'text', label: 'Fuel Type:',
    },
    {
      element: 'input', placeHolder: 'Enter mileage...', value: 'mileage', type: 'text', label: 'Mileage:',
    },
    {
      element: 'input', placeHolder: 'Enter fuel Tank Capacity...', value: 'fuelTankCapacity', type: 'text', label: 'fuel Tank Capacity:',
    },
    {
      element: 'input', placeHolder: 'Enter top speed...', value: 'topSpeed', type: 'number', label: 'Top Speed:',
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
      <h3>Fuel Performance</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
