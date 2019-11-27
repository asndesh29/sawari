
export default () => {
  return [
    {
      element: 'select',
      options: [
        { value: '4wheeler', label: '4wheeler' },
        { value: '3wheeler', label: '3wheeler' },
        { value: '2wheeler', label: '2wheeler' },
      ],
      placeHolder: 'Select Type',
    },

    {
      element: 'select',
      options: [
        { value: 'mahindra', label: 'Mahindra' },
        { value: 'suzuki', label: 'Suzuki' },
      ],
      placeHolder: 'Select Brand',
    },

    {
      element: 'select',
      options: [
        { value: 'p1', label: 'Product 1' },
        { value: 'p2', label: 'Product 2' },
        { value: 'p3', label: 'Product 3' },
        { value: 'p4', label: 'Product 4' },
      ],
      placeHolder: 'Select Product',
    },
    {
      element: 'button',
      text: 'Search',
      intent: 'primary',
    },
  ];
};
