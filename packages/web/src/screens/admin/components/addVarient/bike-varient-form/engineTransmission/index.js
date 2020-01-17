import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter engine type...', value: 'engineType', type: 'text', label: 'Engine Type:',
    },
    {
      element: 'input', placeHolder: 'Enter displacement...', value: 'displacement', type: 'text', label: 'Displacement:',
    },
    {
      element: 'input', placeHolder: 'Enter max power...', value: 'maxPower', type: 'text', label: 'Max power:',
    },
    {
      element: 'input', placeHolder: 'Enter max torque...', value: 'maxTorque', type: 'text', label: 'Max Torque:',
    },
    {
      element: 'input', placeHolder: 'Enter no of cylinder...', value: 'noOofCylinders', type: 'text', label: 'No Of Cylinder:',
    },
    {
      element: 'input', placeHolder: 'Enter cooling system...', value: 'coolingSystem', type: 'text', label: 'Cooling System:',
    },
    {
      element: 'input', placeHolder: 'Enter drive type...', value: 'driveType', type: 'text', label: 'Drive Type:',
    },
    {
      element: 'input', placeHolder: 'Enter starting...', value: 'starting', type: 'text', label: 'Starting:',
    },
    {
      element: 'input', placeHolder: 'Enter fuel supply...', value: 'fuelSupply', type: 'text', label: 'Fuel Supply:',
    },
    {
      element: 'input', placeHolder: 'Enter clutch...', value: 'clutch', type: 'text', label: 'Clutch:',
    },
    {
      element: 'input', placeHolder: 'Enter ignition...', value: 'ignition', type: 'text', label: 'Ignition:',
    },
    {
      element: 'input', placeHolder: 'Enter transmission...', value: 'transmission', type: 'text', label: 'Transmission:',
    },
    {
      element: 'input', placeHolder: 'Enter gear box...', value: 'gearBox', type: 'text', label: 'Gear Box:',
    },
    {
      element: 'input', placeHolder: 'Enter compression ratio...', value: 'compressionRatio', type: 'text', label: 'Compression Ratio:',
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
      <h3>Engine And Transmission</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
