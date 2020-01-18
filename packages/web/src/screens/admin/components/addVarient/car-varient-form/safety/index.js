import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'radiogroup',
      placeHolder: 'Anti-Lock Braking System',
      value: 'antiLockBrakingSystem',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Central Locking',
      value: 'centralLocking',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Anti-Theft Alarm',
      value: 'antiTheftAlarm',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    // {
    //   element: 'radiogroup',
    //   placeHolder: 'No of Airbags',
    //   value: 'noOfAirbags',
    //   radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    // },
    {
      element: 'input', placeHolder: 'Enter no of airbags...', value: 'noOfAirbags', type: 'number', label: 'No of Airbags:',
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
      <h3>Safety</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
