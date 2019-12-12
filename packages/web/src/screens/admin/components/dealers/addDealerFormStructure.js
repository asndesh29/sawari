
export default (props, update) => [
  {
    element: 'select',
    value: 'city',
    options: props.main.initialAdminData.cities.map(c => ({ label: c, value: c })),
    placeHolder: 'Select city..',
  },
  {
    element: 'input', placeHolder: 'Enter province...', value: 'province', type: 'text', label: 'Province:',
  },
  {
    element: 'input', placeHolder: 'Enter type...', value: 'type', type: 'text', label: 'Type:',
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
