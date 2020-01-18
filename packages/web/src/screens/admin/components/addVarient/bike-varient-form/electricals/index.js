import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter headlight...', value: 'headlight', type: 'text', label: 'Head Light:',
    },
    {
      element: 'input', placeHolder: 'Enter tailLight...', value: 'tailLight', type: 'text', label: 'tailLight:',
    },
    {
      element: 'input', placeHolder: 'Enter turn sigal lamp ...', value: 'turnSignalLamp', type: 'text', label: 'Turn Signal Lamp:',
    },
    {
      element: 'input', placeHolder: 'Enter battery type...', value: 'batteryType', type: 'text', label: 'Battery Type:',
    },
    {
      element: 'input', placeHolder: 'Enter batteryCapacity...', value: 'batteryCapacity', type: 'text', label: 'Battery Capacity:',
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
      <h3>Electricals</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
