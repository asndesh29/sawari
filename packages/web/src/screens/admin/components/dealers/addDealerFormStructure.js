
export default (props, update) => [
  {
    element: 'select',
    value: 'city',
    options: props.main.initialAdminData.cities.map(c => ({ label: c, value: c })),
    placeHolder: 'Select city..',
  },
  // {
  //   element: 'input', placeHolder: 'Enter province...', value: 'province', type: 'text', label: 'Province:',
  // },
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
    placeHolder: 'Select province..',
  },

  {
    element: 'select',
    value: 'type',
    options: [
      { label: 'New', value: 'new' },
      { label: 'Used', value: 'used' },
      { label: 'Both', value: 'both' },
    ],
    placeHolder: 'Select Saler Type..',
  },
  {
    element: 'input', placeHolder: 'Enter name...', value: 'name', type: 'text', label: 'Name:',
  },
  {
    element: 'input', placeHolder: 'Enter description...', value: 'description', type: 'text', label: 'Descrition:',
  },
  {
    element: 'input', placeHolder: 'Enter Phone no...', value: 'phoneNo', type: 'text', label: 'Phone No:',
  },
  {
    element: 'input', placeHolder: 'Enter email address...', value: 'email', type: 'text', label: 'Email:',
  },
  {
    element: 'input', placeHolder: 'Enter latitude...', value: 'latitude', type: 'number', label: 'Latitude:',
  },
  {
    element: 'input', placeHolder: 'Enter longitude...', value: 'logitude', type: 'number', label: 'Longitude:',
  },
  {
    element: 'fileinput', placeHolder: 'Select image', value: 'image', type: 'file',
  },
  {
    element: 'button', text: update ? 'Update' : 'Add', intent: 'PRIMARY',
  },
];
