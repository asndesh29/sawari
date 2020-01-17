import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter frontSuspension...', value: 'frontSuspension', type: 'text', label: 'Front Suspension:',
    },
    {
      element: 'input', placeHolder: 'Enter rearSuspension...', value: 'rearSuspension', type: 'text', label: 'Rear Suspension:',
    },
    {
      element: 'input', placeHolder: 'Enter shock absorbers type...', value: 'shockAbsorbersType', type: 'text', label: 'Shock Absorbers Type:',
    },
    {
      element: 'input', placeHolder: 'Enter steering Type...', value: 'steeringType', type: 'text', label: 'Steering Type:',
    },
    {
      element: 'input', placeHolder: 'Enter steering column...', value: 'steeringColumn', type: 'text', label: 'Steering Column:',
    },
    {
      element: 'input', placeHolder: 'Enter steering gear type...', value: 'steeringGearType', type: 'text', label: 'Steering Gear Type:',
    },
    {
      element: 'input', placeHolder: 'Enter turning radius...', value: 'turningRadius', type: 'text', label: 'Turning Radius:',
    },
    {
      element: 'input', placeHolder: 'Enter front brake type...', value: 'frontBrakeType', type: 'text', label: 'Front Brake Type:',
    },
    {
      element: 'input', placeHolder: 'Enter rear brake type...', value: 'rearBrakeType', type: 'text', label: 'Rear Brake Type:',
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
      <h3>Suspention Steering And Brake</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
