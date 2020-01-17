import React from 'react';
import Form from '../../../../components/common/Form';

const mapBrand = (props) => {
  const { form, main } = props;
  const res = main.initialAdminData.vehicleBrand.filter(vb => vb.stypeId === parseInt(form.ServiceTypeBrandModelVarient.stypeId, 10)).map(vb => ({ label: vb.brandName, value: vb.id }));
  // console.log('selected brand', res);
  return res;
};

const mapModel = (props) => {
  const { form, main } = props;
  const res = main.initialAdminData.vehicleModel.filter(vb => vb.stypeId === parseInt(form.ServiceTypeBrandModelVarient.stypeId, 10) && vb.sbId === parseInt(form.ServiceTypeBrandModelVarient.sbId, 10)).map(vb => ({ label: vb.name, value: vb.id }));
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
    value: 'modelId',
    options: mapModel(props),
    placeHolder: 'Select Model',
  },
];

export default (props) => {
  return (
  <form style={{ width: 'auto', display: 'flex', flexDirection: 'row'}}>
    <Form contents={addBrandStructure(props)} {...props} schema="ServiceTypeBrandModelVarient" />
  </form>
  );
};
