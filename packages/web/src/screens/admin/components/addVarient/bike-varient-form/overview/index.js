import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter engine...', value: 'engine', type: 'number', label: 'Engine:',
    },
    {
      element: 'input', placeHolder: 'Enter power...', value: 'power', type: 'number', label: 'Power:',
    },
    {
      element: 'input', placeHolder: 'Enter torque...', value: 'torque', type: 'number', label: 'Torque:',
    },
    {
      element: 'input', placeHolder: 'Enter mileage...', value: 'mileage', type: 'number', label: 'Mileage:',
    },
    {
      element: 'input', placeHolder: 'Enter brakes...', value: 'brakes', type: 'text', label: 'Brakes:',
    },
    {
      element: 'input', placeHolder: 'Enter tyre type...', value: 'tyreType', type: 'text', label: 'Tyre Type:',
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
