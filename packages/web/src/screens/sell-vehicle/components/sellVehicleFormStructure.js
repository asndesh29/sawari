
const mapBrand = (props) => {
  console.log('props in mapbrand', props)
  const { form, main } = props;
  const res = main.initialData.vehicleBrand.filter(vb => vb.stypeId === parseInt(form.sellVehicle.stypeId, 10)).map(vb => ({ label: vb.brandName, value: vb.id }));
  console.log('selected brand', res);
  return res;
};

const mapCities = (props) => {
  console.log('props in mapbrand', props)
  const { form, main } = props;
  const res = main.initialData.cities.map(c => ({ label: c, value: c }));
  console.log('selected brand', res);
  return res;
};

export default (props) => [
  {
    element: 'radiogroup',
    placeHolder: 'Select Vehicle Type',
    value: 'stypeId',
    radios: props.main.initialData.vehicalTypes.map(vt => ({ element: 'radio', label: vt.name, value: vt.id })),
  },
  {
    element: 'select',
    value: 'sbId',
    options: mapBrand(props),
    placeHolder: 'Select Brand',
  },
  {
    element: 'input', placeHolder: 'Enter vehicle name...', value: 'vehicleName', type: 'text', label: 'Vehicle Name:',
  },
  {
    element: 'input', placeHolder: 'Enter KMs driven...', value: 'kmsDriven', type: 'number', label: 'KMs Driven:',
  },
  {
    element: 'select',
    value: 'ownerShip',
    options: [{ label: 'First', value: 'First' }, { label: 'Second', value: 'Second' }, { label: 'Third', value: 'Third' }, { label: 'Above', value: 'Above' }],
    placeHolder: 'Wonership',
  },
  {
    element: 'select',
    value: 'city',
    options: mapCities(props),
    placeHolder: ' Select City',
  },
  {
    element: 'input', placeHolder: 'Enter expected price...', value: 'expectedPrice', type: 'number', label: 'Expected Price',
  },
  {
    element: 'input', placeHolder: 'Enter your name...', value: 'ownerName', type: 'text', label: 'Name',
  },
  {
    element: 'input', placeHolder: 'Enter your email...', value: 'ownerEmail', type: 'text', label: 'Email',
  },
  {
    element: 'input', placeHolder: 'Enter your phone number...', value: 'ownerPhoneNo', type: 'number', label: 'Phone No',
  },
  {
    element: 'imageGroup',
    placeHolder: 'Upload Photos',
    options: [
      { label: '+photo', value: 'image1' },
      { label: '+font', value: 'image2' },
      { label: '+back', value: 'image3' },
      { label: '+left', value: 'image4' },
      { label: '+right', value: 'image5' },
    ],
  },
  {
    element: 'button', text: 'Add', intent: 'PRIMARY',
  },
];
