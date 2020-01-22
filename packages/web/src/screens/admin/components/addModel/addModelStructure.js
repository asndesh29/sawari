
export default (props, update) => [

  {
    element: 'input', placeHolder: 'Enter model name...', value: 'name', type: 'text', label: 'Model Name:',
  },
  {
    element: 'select',
    value: 'category',
    options: [{ label: 'Latest', value: 'Latest' }, { label: 'Popular', value: 'Popular' }, { label: 'Upcoming', value: 'Upcoming' }],
    placeHolder: 'Select Category',
  },
  {
    element: 'fileinput', placeHolder: 'Select Model image', value: 'image', type: 'file',
  },
  {
    element: 'button', text: update ? 'Update Model' : 'Add Model', intent: 'PRIMARY',
  },
];
