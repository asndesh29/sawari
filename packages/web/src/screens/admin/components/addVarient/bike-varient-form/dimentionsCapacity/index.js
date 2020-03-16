import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter length...', value: 'length', type: 'number', label: 'Length:',
    },
    {
      element: 'input', placeHolder: 'Enter width...', value: 'width', type: 'number', label: 'Width:',
    },
    {
      element: 'input', placeHolder: 'Enter Height...', value: 'height', type: 'number', label: 'Height:',
    },
    {
      element: 'input', placeHolder: 'Enter fuelCapacity...', value: 'fuelCapacity', type: 'number', label: 'Fuel Capacity:',
    },
    {
      element: 'input', placeHolder: 'Enter fuelReserve...', value: 'fuel', type: 'number', label: 'Fuel Reserve:',
    },
    {
      element: 'input', placeHolder: 'Enter saddleHeight...', value: 'saddleHeight', type: 'number', label: 'Saddle Height:',
    },
    {
      element: 'input', placeHolder: 'Enter groundClearance...', value: 'groundClearance', type: 'number', label: 'Ground Clearance:',
    },
    {
      element: 'input', placeHolder: 'Enter wheelBase...', value: 'wheelbase', type: 'number', label: 'Wheel Base:',
    },
    {
      element: 'input', placeHolder: 'Enter kerbWeight...', value: 'kerbWeight', type: 'number', label: 'Kerb Weight:',
    },
    {
      element: 'input', placeHolder: 'Enter loadCapacity...', value: 'loadCapacity', type: 'number', label: 'Load Capacity:',
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
      <h3>Dimension Capacity</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
