
const mapBrand = (props) => {
  console.log('props in mapbrand', props)
  const { form, main } = props;
  const isCar = parseInt(form.sellVehicle.stypeId, 10) === 1;
  const res = main.initialAdminData.vehicleBrand.filter((vb) => vb.stypeId === (isCar ? 1 : 2)).map(vb => ({ label: vb.brandName, value: vb.id }));
  console.log('selected brand', res);
  return res;
};

const mapCities = (props) => {
  console.log('props in mapbrand', props)
  const { form, main } = props;
  const res = main.initialAdminData.cities.map(c => ({ label: c, value: c }));
  console.log('selected brand', res);
  return res;
};

export default (props) => [
  {
    element: 'radiogroup',
    placeHolder: 'Select Vehicle Type',
    value: 'stypeId',
    radios: [{ element: 'radio', label: 'Car', value: 1 }, { element: 'radio', label: 'Bike', value: 2 }, { element: 'radio', label: 'Scooter', value: 3 }],
  },
  {
    element: 'select',
    value: 'customerType',
    options: [{ label: 'Individual', value: 'Individual' }, { label: 'Institutional', value: 'Institutional' }, { label: 'Governmental', value: 'Governmental' }],
    placeHolder: 'Select customer type',
  },
  {
    element: 'input', placeHolder: 'Enter make year...', value: 'makeYear', type: 'number', label: 'Make Year:',
  },
  {
    element: 'select',
    value: 'sbId',
    options: mapBrand(props),
    placeHolder: 'Select Brand',
  },
  {
    element: 'input', placeHolder: 'Enter vehicle model...', value: 'model', type: 'text', label: 'Vehicle Model Name:',
  },
  {
    element: 'input', placeHolder: 'Enter vehicle variant name...', value: 'variant', type: 'text', label: 'Vehicle Variant Name:',
  },
  {
    element: 'input', placeHolder: 'Enter KMs driven...', value: 'kmsDriven', type: 'number', label: 'KMs Driven:',
  },
  {
    element: 'input', placeHolder: 'Enter displacement...', value: 'displacement', type: 'text', label: 'Displacement:',
  },
  {
    element: 'select',
    value: 'ownerShip',
    options: [{ label: 'First', value: 'First' }, { label: 'Second', value: 'Second' }, { label: 'Third', value: 'Third' }, { label: 'Above', value: 'Above' }],
    placeHolder: 'Wonership',
  },
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
    placeHolder: ' Select province:',
  },
  {
    element: 'select',
    value: 'city',
    options: mapCities(props),
    placeHolder: ' Select City:',
  },
  {
    element: 'radiogroup',
    placeHolder: 'Tax Clearance:',
    value: 'taxClearance',
    radios: [{ element: 'radio', label: 'Yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
  },
  {
    element: 'input', placeHolder: 'Enter registration no...', value: 'registrationNo', type: 'text', label: 'Registration No:',
  },
  {
    element: 'input', placeHolder: 'Enter expected price...', value: 'expectedPrice', type: 'number', label: 'Expected Price:',
  },
  {
    element: 'input', placeHolder: 'Enter your name...', value: 'ownerName', type: 'text', label: 'Name:',
  },
  {
    element: 'input', placeHolder: 'Enter your email...', value: 'ownerEmail', type: 'text', label: 'Email:',
  },
  {
    element: 'input', placeHolder: 'Enter your phone number...', value: 'ownerPhoneNo', type: 'number', label: 'Phone No:',
  },
  {
    element: 'imageGroup',
    placeHolder: 'Upload Photos',
    options: [
      { label: '+photo', value: 'image1' },
      { label: '+front', value: 'image2' },
      { label: '+back', value: 'image3' },
      { label: '+left', value: 'image4' },
      { label: '+right', value: 'image5' },
    ],
  },
  {
    element: 'button', text: 'Add', intent: 'PRIMARY',
  },
];
