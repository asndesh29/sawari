import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'radiogroup',
      placeHolder: 'DVD Player',
      value: 'DVDPlayer',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Audio System Remote Control',
      value: 'audioSystemRemoteControl',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Integrated 2DIN Audio',
      value: 'integrated2DINAudio',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'USB & Auxiliary input',
      value: 'USBAuxiliaryinput',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Bluetooth Connectivity',
      value: 'bluetoothConnectivity',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Touch Screen',
      value: 'touchScreen',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'input', placeHolder: 'Enter connectivity...', value: 'connectivity', type: 'text', label: 'Connectivity:',
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
      <h3>Entertainment And Communication</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
