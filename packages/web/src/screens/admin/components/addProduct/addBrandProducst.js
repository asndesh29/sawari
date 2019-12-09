
export default (props, update) => [

  {
    element: 'input', placeHolder: 'Enter name...', value: 'name', type: 'text', label: 'Name:',
  },
  {
    element: 'input', placeHolder: 'Enter price...', value: 'price', type: 'number', label: 'Price:',
  },
  {
    element: 'input', placeHolder: 'Enter displacement...', value: 'displacement', type: 'text', label: 'Displacement:',
  },
  {
    element: 'input', placeHolder: 'Enter power...', value: 'power', type: 'text', label: 'Power:',
  },
  {
    element: 'input', placeHolder: 'Enter torque...', value: 'torque', type: 'text', label: 'Torque:',
  },
  {
    element: 'input', placeHolder: 'Enter fueltabkcapacity...', value: 'fueltankCapacity', type: 'text', label: 'Fuel Tank Capacity:',
  },
  {
    element: 'input', placeHolder: 'Enter tyre...', value: 'tyre', type: 'text', label: 'Tyre:',
  },
  {
    element: 'input', placeHolder: 'Enter groundClearance...', value: 'groundClearance', type: 'text', label: 'Ground Clearance:',
  },
  {
    element: 'input', placeHolder: 'Enter battery...', value: 'battery', type: 'text', label: 'Battery:',
  },
  // {
  //   element: 'color-picker', placeHolder: 'Select Color', value: 'availableColor', label: 'Select Color',
  // }
  {
    element: 'fileinput', placeHolder: 'Select brand logo', value: 'image', type: 'file',
  },
  {
    element: 'switch', label: 'Mark New', value: 'markNew'
  },
  {
    element: 'switch', label: 'Mark Popular', value: 'markPopular',
  },
  {
    element: 'input', placeHolder: 'Enter offer...', value: 'offer', type: 'number', label: 'Offer:',
  },
  {
    element: 'button', text: update ? 'Update' : 'Add', intent: 'PRIMARY',
  },
];
