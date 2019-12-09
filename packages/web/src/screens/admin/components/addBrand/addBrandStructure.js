
export default (props, update) => [

  {
    element: 'input', placeHolder: 'Enter brand name...', value: 'brandName', type: 'text', label: 'Brand Name:',
  },
  {
    element: 'fileinput', placeHolder: 'Select brand logo', value: 'image', type: 'file',
  },
  {
    element: 'button', text: update ? 'Update Brand' : 'Add Brand', intent: 'PRIMARY',
  },
];
