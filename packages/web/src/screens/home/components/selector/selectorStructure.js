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
      options: main.initialData.vehicalTypes ? main.initialData.vehicalTypes.map(vt => ({ label: vt.name, value: vt.id })) : [],
      placeHolder: 'Select Type',
    },

    {
      element: 'select',
      value: form.multiSearch.searchType === 'budget' ? 'budgetId' : 'brandId',
      options: form.multiSearch.searchType === 'budget'
        ? (main.initialData.budgetRangeList ? main.initialData.budgetRangeList.map(vt => ({ label: vt.label, value: vt.id })) : [])
        : (main.initialData.vehicleBrand ? main.initialData.vehicleBrand.filter(b => b.stypeId === parseInt(form.multiSearch.typeId, 10)).map(vb => ({ label: vb.brandName, value: vb.id })) : []),
      placeHolder: form.multiSearch.searchType === 'budget' ? 'Select Budget' : 'Select Brand',
    },

    {
      element: 'button',
      text: 'Search',
      intent: 'primary',
    },
  ];
};
