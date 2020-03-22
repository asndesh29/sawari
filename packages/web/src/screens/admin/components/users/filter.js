import React from 'react';
import Form from '../../../../components/common/Form';

const addBrandStructure = (props) => [
  {
    element: 'radiogroup',
    placeHolder: 'User Type',
    value: 'type',
    radios: [{ element: 'radio', label: 'New', value: 'new' }, { element: 'radio', label: 'Used', value: 'used' }, { element: 'radio', label: 'Both', value: 'both' }],
  },
];

export default (props) => {
  return (
    <form style={{ width: 'auto', display: 'flex', flexDirection: 'row', marginTop: 10 }}>
      <Form contents={addBrandStructure(props)} {...props} schema="User" />
    </form>
  );
};
