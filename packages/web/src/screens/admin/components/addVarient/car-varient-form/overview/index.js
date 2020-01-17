import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter mileage...', value: 'mileage', type: 'text', label: 'Mileage:',
    },
    {
      element: 'input', placeHolder: 'Enter engine...', value: 'engine', type: 'text', label: 'Engine:',
    },
    {
      element: 'input', placeHolder: 'Enter BHP...', value: 'BHP', type: 'number', label: 'BHP:',
    },
    {
      element: 'input', placeHolder: 'Enter transmission...', value: 'transmission', type: 'text', label: 'Transmission:',
    },
    {
      element: 'input', placeHolder: 'Enter seats...', value: 'seats', type: 'text', label: 'Seats:',
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
      <h3>Varient Overview</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
