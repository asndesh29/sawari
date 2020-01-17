import React from 'react';
import Form from '../../../../../../components/common/Form';

const addMainVarientStructure = (props, update) => {
  return [
    {
      element: 'radiogroup',
      placeHolder: 'Adjustable Headlights',
      value: 'adjustableHeadlights',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Fog Lights Front',
      value: 'fogLightsFront',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Fog Lights Rear',
      value: 'fogLightsRear',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Exterior Rear View Mirror',
      value: 'exteriorRearViewMirror',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Wheel Covers',
      value: 'wheelCovers',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Alloy Wheel Size',
      value: 'alloyWheelSize',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Roof Carrier',
      value: 'roofCarrier',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'radiogroup',
      placeHolder: 'Outside Rear View Mirror Turn Indicators',
      value: 'outsideRearViewMirrorTurnIndicators',
      radios: [{ element: 'radio', label: 'yes', value: 1 }, { element: 'radio', label: 'No', value: 0 }],
    },
    {
      element: 'button', text: update ? 'Update' : 'Add', intent: 'PRIMARY',
    },
  ];
};

export default (allProps) => {
  const { schema, props } = allProps;
  console.log('props in main varient form', props);
  return (
    <div style={{ width: '50vw', height: '80vh', background: '#f5f5f5', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Exterior</h3>
      <form style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
        <Form contents={addMainVarientStructure(props, false)} {...props} schema={schema} />
      </form>
    </div>
  );
};
