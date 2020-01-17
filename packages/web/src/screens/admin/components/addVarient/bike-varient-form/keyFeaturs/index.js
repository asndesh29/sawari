import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'radiogroup',
      placeHolder: 'ABS',
      value: 'ABS',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'input', placeHolder: 'Enter braking type...', value: 'brakingType', type: 'text', label: 'Braking Type:',
    },
    {
      element: 'input', placeHolder: 'Enter speedometer...', value: 'speedometer', type: 'text', label: 'Speedometer:',
    },
    {
      element: 'input', placeHolder: 'Enter odometer...', value: 'odometer', type: 'text', label: 'odometer:',
    },
    {
      element: 'radiogroup',
      placeHolder: 'Fuel gauge',
      value: 'fuelGauge',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
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
      <h3>Key Featurs</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
