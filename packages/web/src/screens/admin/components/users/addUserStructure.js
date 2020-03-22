
export default (props, update) => [
  {
    element: 'input', placeHolder: 'Enter Name...', value: 'name', type: 'text', label: 'Name',
  },
  {
    element: 'input', placeHolder: 'Enter user name...', value: 'userName', type: 'text', label: 'User Name:',
  },
  {
    element: 'input', placeHolder: 'Enter password...', value: 'plainPassword', type: 'text', label: 'Password',
  },

  {
    element: 'button', text: update ? 'Update Brand' : 'Add Brand', intent: 'PRIMARY',
  },
];
