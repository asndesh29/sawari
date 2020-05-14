export default () => [
  {
    element: 'input', placeHolder: 'Enter news header...', value: 'header', type: 'text', label: 'Header:',
  },
  {
    element: 'imageGroup',
    placeHolder: 'Upload Photos',
    options: [
      { label: '+main', value: 'image' },
      { label: '+image1', value: 'image1' },
      { label: '+image2', value: 'image2' },
      { label: '+image3', value: 'image3' },
      { label: '+image4', value: 'image4' },
    ],
  },
];
