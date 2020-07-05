
const mapBrand = (props) => {
  // console.log('props in mapbrand', props);
  const { form, main } = props;
  const isCar = parseInt(form.sellVehicle.stypeId, 10) === 1;
  const res = main.initialData.vehicleBrand.filter((vb) => vb.stypeId === (isCar ? 1 : 2)).map(vb => ({ label: vb.brandName, value: vb.id }));
  // console.log('selected brand', res);
  return res;
};

const mapCities = (props) => {
  // console.log('props in mapbrand', props);
  const { form, main } = props;
  const res = main.initialData.cities.map(c => ({ label: c, value: c }));
  // console.log('selected brand', res);
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
    element: 'input', placeHolder: 'Eg. 2015', value: 'makeYear', type: 'number', label: 'Make Year:',
  },
  {
    element: 'select',
    value: 'sbId',
    options: mapBrand(props),
    placeHolder: 'Select Brand',
  },
  {
    element: 'input', placeHolder: 'Eg. Mahindra XUV', value: 'model', type: 'text', label: 'Vehicle Model Name:',
  },
  {
    element: 'input', placeHolder: 'Eg. Mahindra XUV300', value: 'variant', type: 'text', label: 'Vehicle Variant Name:',
  },
  {
    element: 'input', placeHolder: 'Eg. 1000', value: 'kmsDriven', type: 'number', label: 'KMs Driven(Km):',
  },
  {
    element: 'input', placeHolder: 'Eg. 1497', value: 'displacement', type: 'text', label: 'Displacement(cc):',
  },
  {
    element: 'radiogroup',
    placeHolder: 'Fuel Type:',
    value: 'fuelType',
    radios: [
      { element: 'radio', label: 'Petrol', value: 'Petrol' },
      { element: 'radio', label: 'Diesel', value: 'Diesel' },
      { element: 'radio', label: 'Electric', value: 'Electric' },
    ],
  },
  {
    element: 'colorPicker',
    label: 'Select Color:',
    value: 'color',
  },
  {
    element: 'select',
    value: 'ownerShip',
    options: [{ label: 'First', value: 'First' }, { label: 'Second', value: 'Second' }, { label: 'Third', value: 'Third' }, { label: 'Above', value: 'Above' }],
    placeHolder: 'Ownership',
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
    placeHolder: ' Select Province:',
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
    element: 'input', placeHolder: 'Eg. GANDAKI 01,001, PA1234', value: 'registrationNo', type: 'text', label: 'Registration No:',
  },
  {
    element: 'input', placeHolder: 'Eg. 45.5', value: 'expectedPrice', type: 'number', label: 'Expected Price(Lakh):',
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
      { label: '+Photo', value: 'image1' },
      { label: '+Front', value: 'image2' },
      { label: '+Back', value: 'image3' },
      { label: '+Left', value: 'image4' },
      { label: '+Right', value: 'image5' },
    ],
  },
  {
    element: 'textArea',
    value: 'remarks',
    label: 'Remarks',
    height: 100,
    placeHolder: 'Type your remarks here...',
  },
  {
    element: 'button', text: 'Add', intent: 'PRIMARY',
  },
];
