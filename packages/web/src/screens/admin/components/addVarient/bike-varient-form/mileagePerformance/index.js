import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter ARAIMileage...', value: 'ARAIMileage', type: 'number', label: 'ARAIMileage:',
    },
    {
      element: 'input', placeHolder: 'Enter max speed...', value: 'maxSpeed', type: 'number', label: 'Max Speed:',
    },
    {
      element: 'input', placeHolder: 'Enter acceleration...', value: 'Acceleration', type: 'text', label: 'Acceleration:',
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
      <h3>Mileage And Performance</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
