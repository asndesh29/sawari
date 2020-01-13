import React from 'react';
import Form from '../../../../components/common/Form';

const brandNameOptionFormatter = (props) => {
  const { main, form } = props;
  const options = main.initialAdminData.vehicleBrand.filter(vb => parseInt(vb.stypeId, 10) === parseInt(form.addModel.stypeId, 10)).map(obj => ({ label: obj.brandName, value: obj.id }))
  return options;
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
    options: brandNameOptionFormatter(props),
    placeHolder: 'Select Fuel Type',
  },
];

export default (props) => {
  return (
  <form style={{ width: 'auto', display: 'flex', flexDirection: 'row', marginTop: 10, height: 'auto' }}>
    <Form contents={addBrandStructure(props)} {...props} schema="addModel" />
  </form>
  );
};
