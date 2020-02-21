/* eslint-disable no-nested-ternary */
/* eslint-disable no-trailing-spaces */

export default (props) => {
  const { main, form } = props;
  return [
    {
      element: 'radiogroup',
      value: 'searchType',
      radios: [
        { element: 'radio', label: 'By Budget', value: 'budget' },
        { element: 'radio', label: 'By Brand', value: 'brand' },
      ],
    },
    {
      element: 'select',
      value: 'typeId',
      options: [{ label: 'Car', value: 1 }, { label: 'Bike', value: 2 }],
      placeHolder: 'Select Type',
    },

    {
      element: 'select',
      value: form.multiSearch.searchType === 'budget' ? 'budgetId' : 'brandId',
      options: form.multiSearch.searchType === 'budget'
        ? (main.initialData.budgetRangeList ? main.initialData.budgetRangeList.map(vt => ({ label: vt.label, value: vt.label.replace(/\s/g, '-').toLocaleLowerCase() })) : [])
        : (main.initialData.vehicleBrand
          ? main.initialData.vehicleBrand.filter(b => b.stypeId === parseInt(form.multiSearch.typeId, 10))
            .map(vb => ({ label: vb.brandName, value: `${vb.brandName.replace(/\s/g, '')}-${vb.id}`.toLocaleLowerCase() })) : []),
      placeHolder: form.multiSearch.searchType === 'budget' ? 'Select Budget' : 'Select Brand',
    },

    {
      element: 'button',
      text: 'Search',
      intent: 'primary',
      style: {
        background: '#ff4202',
        color: 'white',
      },
    },
  ];
};
