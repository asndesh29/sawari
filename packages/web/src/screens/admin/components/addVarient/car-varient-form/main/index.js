import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'select',
      value: 'bodyType',
      options: [
        { label: 'Sedan', value: 'Sedan' },
        { label: 'Hatchback', value: 'Hatchback' },
        { label: 'Wagan', value: 'Wagan' },
        { label: 'Suv', value: 'Suv' },
        { label: 'Van', value: 'Van' },
        { label: 'Pick-Up', value: 'Pick-Up' },
        { label: 'Luxury', value: 'Luxury' },
        { label: 'Muv', value: 'Muv' },
        { label: 'Minivans', value: 'Minivans' },
        { label: 'Convertibles', value: 'Convertibles' },
        { label: 'Coupe', value: 'Coupe' },
        { label: 'Hybrids', value: 'Hybrids' },
        { label: 'Pickup Truck', value: 'Pickuptrucks' },
      ],
      placeHolder: 'Select Body Type',
    },
    {
      element: 'select',
      value: 'fuelType',
      options: [
        { label: 'Petrol', value: 'Petrol' },
        { label: 'Diesel', value: 'Diesel' },
        { label: 'CNG', value: 'CNG' },
        { label: 'LPG', value: 'LPG' },
        { label: 'Electric', value: 'Electric' },
        { label: 'Hybrid', value: 'Hybrid' },
      ],
      placeHolder: 'Select Fuel Type',
    },
    {
      element: 'input', placeHolder: 'Enter name...', value: 'name', type: 'text', label: 'Name:',
    },
    {
      element: 'input', placeHolder: 'Enter exShowRoom Price...', value: 'exShowRoomPrice', type: 'number', label: 'ExShowRoom Price',
    },
    {
      element: 'input', placeHolder: 'Enter onRoad Price Price...', value: 'onRoadPrice', type: 'number', label: 'onRoad Price',
    },

    {
      element: 'button', text: update ? 'Update' : 'Add', intent: 'PRIMARY',
    },
  ];
};

export default (allProps) => {
  const { schema, props } = allProps;
  // const { updateFormValue } = props;
  // const mainValue = props.main.initialAdminData.vehicleVarientList.find(v => v.id === props.main.varientId);
  // updateFormValue(schema, { ...props.form[schema], ...mainValue });
  // console.log('varient main value', mainValue);
  // console.log('props in main varient form', props);
  return (
    <div style={{ width: '50vw', height: '80vh', background: '#f5f5f5', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Main Varient Details</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
