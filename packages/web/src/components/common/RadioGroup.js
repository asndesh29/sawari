import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, Radio } from '@blueprintjs/core';

const CustomRadioButton = ({ content, props }) => {
  return (
    <RadioGroup
      label={content.placeHolder}
      onChange={e => props.updateFormValue(props.schema, { [content.value]: e.currentTarget.value })}
      selectedValue={props.form[props.schema][content.value]}
      inline
    >
      {content.radios.map((item, idx) => <Radio key={idx} inline label={item.label} value={`${item.value}`} />)}
    </RadioGroup>
  );
};

export default CustomRadioButton;

CustomRadioButton.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};
