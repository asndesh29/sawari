import React from 'react';
import Form from '../../../../components/common/Form';

const mapBrand = (props) => {
  const { form, main } = props;
  const res = main.initialAdminData.vehicleBrand.filter(vb => vb.stypeId === parseInt(form.sellVehicleFilter.stypeId, 10)).map(vb => ({ label: vb.brandName, value: vb.id }));
  // console.log('selected brand', res);
  return res;
};

const addBrandStructure = (props) => [
  {
    element: 'radiogroup',
    // placeHolder: '',
    value: 'stypeId',
    radios: props.main.initialAdminData.vehicleType.map(vt => ({ element: 'radio', label: vt.name, value: vt.id })),
  },
  {
    element: 'select',
    value: 'sbId',
    options: mapBrand(props),
    placeHolder: 'Select Brand',
  },

  {
    element: 'select',
    value: 'province',
    options: [
      { label: 'Province-1', value: 'Province-1' },
      { label: 'Province-2', value: 'Province-2' },
      { label: 'Province-3', value: 'Province-3' },
      { label: 'Province-4', value: 'Province-4' },
      { label: 'Province-5', value: 'Province-5' },
      { label: 'Province-6', value: 'Province-6' },
      { label: 'Province-7', value: 'Province-7' },
    ],
    placeHolder: ' Select province:',
  },
];

export default (props) => {
  return (
    <form style={{ width: 'auto', display: 'flex', flexDirection: 'row' }}>
      <Form contents={addBrandStructure(props)} {...props} schema="sellVehicleFilter" />
    </form>
  );
};
