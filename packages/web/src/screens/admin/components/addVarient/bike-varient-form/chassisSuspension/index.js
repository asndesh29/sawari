import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter chassis...', value: 'chassis', type: 'text', label: 'Chassis:',
    },
    {
      element: 'input', placeHolder: 'Enter body type...', value: 'bodyType', type: 'text', label: 'Body Type:',
    },
    {
      element: 'input', placeHolder: 'Enter front suspension...', value: 'frontSuspension', type: 'text', label: 'Front Suspension:',
    },
    {
      element: 'input', placeHolder: 'Enter rear suspension...', value: 'rearSuspension', type: 'text', label: 'Rear Suspension:',
    },
    {
      element: 'input', placeHolder: 'Enter Body Graphics...', value: 'bodyGraphics', type: 'text', label: 'Body Graphics:',
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
      <h3>Chasis And Suspension</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
