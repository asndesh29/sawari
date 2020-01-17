import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter tyreSize...', value: 'tyreSize', type: 'number', label: 'Tyre Size:',
    },
    {
      element: 'input', placeHolder: 'Enter tyre Type...', value: 'tyreType', type: 'number', label: 'Tyre Type:',
    },
    {
      element: 'input', placeHolder: 'Enter wheelSize...', value: 'wheelSize', type: 'number', label: 'Wheel Size:',
    },
    {
      element: 'input', placeHolder: 'Enter wheelsType...', value: 'wheelsType', type: 'number', label: 'Wheels Type:',
    },
    {
      element: 'input', placeHolder: 'Enter frontBrake...', value: 'frontBrake', type: 'number', label: 'Front Brake:',
    },
    {
      element: 'input', placeHolder: 'Enter rearBrake...', value: 'rearBrake', type: 'number', label: 'Rear Brake:',
    },
    {
      element: 'input', placeHolder: 'Enter frontBrakeDiameter...', value: 'frontBrakeDiameter', type: 'number', label: 'Front Brake Diameter:',
    },
    {
      element: 'input', placeHolder: 'Enter rearBrakeDiameter...', value: 'rearBrakeDiameter', type: 'number', label: 'Rear Brake Diameter:',
    },
    {
      element: 'input', placeHolder: 'Enter radialTyre...', value: 'radialTyre', type: 'number', label: 'Radial Tyre:',
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
      <h3>Tyres and Brakes</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
