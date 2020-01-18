import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter engine type...', value: 'engineType', type: 'text', label: 'Engine Type:',
    },
    {
      element: 'input', placeHolder: 'Enter displacement...', value: 'displacement', type: 'number', label: 'Displacement:',
    },
    {
      element: 'input', placeHolder: 'Enter max power...', value: 'maxPower', type: 'text', label: 'Max power:',
    },
    {
      element: 'input', placeHolder: 'Enter max torque...', value: 'maxTorque', type: 'text', label: 'Max Torque:',
    },
    {
      element: 'input', placeHolder: 'Enter no of cylinder...', value: 'noOfcylinder', type: 'number', label: 'No Of Cylinder:',
    },
    {
      element: 'input', placeHolder: 'Enter valves per cylinder...', value: 'valvesPerCylinder', type: 'number', label: 'Valves Per Cylinder:',
    },
    {
      element: 'input', placeHolder: 'Enter valve configuration...', value: 'valveConfiguration', type: 'text', label: 'Valve Configuration:',
    },
    {
      element: 'input', placeHolder: 'Enter fuel supply system...', value: 'fuelSupplySystem', type: 'text', label: 'Fuel Supply System:',
    },
    {
      element: 'input', placeHolder: 'Enter super charge...', value: 'superCharge', type: 'text', label: 'Super Charge:',
    },
    {
      element: 'input', placeHolder: 'Enter Transmission Type...', value: 'transmissionType', type: 'text', label: 'Transmission Type:',
    },
    {
      element: 'input', placeHolder: 'Enter gear box...', value: 'gearBox', type: 'text', label: 'Gear Box:',
    },
    {
      element: 'input', placeHolder: 'Enter drive type...', value: 'driveType', type: 'text', label: 'Drive Type:',
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
