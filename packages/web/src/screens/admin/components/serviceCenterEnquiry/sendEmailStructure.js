
export default (props, update) => [

  {
    element: 'input', placeHolder: 'Email...', value: 'email', type: 'email', label: 'Email:',
  },
  {
    element: 'textArea', placeHolder: 'Enter reply email', value: 'message', type: 'text', label: 'Message:',
  },
  {
    element: 'button', text: 'Send Email', intent: 'PRIMARY',
  },
];
