import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'input', placeHolder: 'Enter length...', value: 'length', type: 'number', label: 'Length:',
    },
    {
      element: 'input', placeHolder: 'Enter width...', value: 'width', type: 'number', label: 'Width:',
    },
    {
      element: 'input', placeHolder: 'Enter Height...', value: 'height', type: 'number', label: 'Height:',
    },
    {
      element: 'input', placeHolder: 'Enter boot space...', value: 'bootSpace', type: 'number', label: 'Boot space:',
    },
    {
      element: 'input', placeHolder: 'Enter seating capacity  ...', value: 'seatingCapacity', type: 'number', label: 'Seating Capacity:',
    },
    {
      element: 'input', placeHolder: 'Enter ground clearance unladen...', value: 'groundClearanceUnladen', type: 'number', label: 'Ground Clearance Unladen:',
    },
    {
      element: 'input', placeHolder: 'Enter wheel base...', value: 'wheelBase', type: 'number', label: 'Wheel Base:',
    },
    {
      element: 'input', placeHolder: 'Enter front tread...', value: 'frontTread', type: 'number', label: 'Front Tread:',
    },
    {
      element: 'input', placeHolder: 'Enter rear tread...', value: 'rearTread', type: 'number', label: 'Rear Tread:',
    },
    {
      element: 'input', placeHolder: 'Enter rear head room...', value: 'rearHeadroom', type: 'number', label: 'Rear Head Room:',
    },
    {
      element: 'input', placeHolder: 'Enter front head room...', value: 'frontHeadroom', type: 'text', label: 'Front Head Room:',
    },
    {
      element: 'input', placeHolder: 'Enter front leg room...', value: 'frontLegroom', type: 'text', label: 'Front Leg Room:',
    },
    {
      element: 'input', placeHolder: 'Enter rear shoulder room...', value: 'rearShoulderroom', type: 'number', label: 'Rear Shoulder Room:',
    },
    {
      element: 'input', placeHolder: 'Enter no of doors...', value: 'noOfDoors', type: 'number', label: 'No Of Doors:',
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
      <h3>Dimension Capacity</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
