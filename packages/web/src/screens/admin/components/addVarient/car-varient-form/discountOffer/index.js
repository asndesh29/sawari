import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'radiogroup',
      placeHolder: 'Offer',
      value: 'status',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'fileinput', placeHolder: 'Select offer image', value: 'image', type: 'file',
    },
    {
      element: 'textArea', placeHolder: 'Enter offer message', value: 'message', type: 'text', label: 'Offer Message:',
    },
    {
      element: 'input', placeHolder: 'Enter discount price', value: 'priceDiscount', type: 'number', label: 'Discount:',
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
