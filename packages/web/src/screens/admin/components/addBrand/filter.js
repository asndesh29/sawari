import React from 'react';
import Form from '../../../../components/common/Form';

const addBrandStructure = (props) => [
  {
    element: 'radiogroup',
    // placeHolder: '',
    value: 'stypeId',
    radios: props.main.initialAdminData.vehicleType.map(vt => ({ element: 'radio', label: vt.name, value: vt.id })),
  },
];

export default (props) => {
  return (
    <form style={{ width: 'auto', display: 'flex', flexDirection: 'row', marginTop: 10 }}>
      <Form contents={addBrandStructure(props)} {...props} schema="addBrand" />
    </form>
  );
};
