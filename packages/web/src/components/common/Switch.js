import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@blueprintjs/core';

const CustomSwitch = ({ content, props }) => {
  return (
    <Switch
      onClick={(e) => console.log('switch value', e)}
      label={content.label}
      onChange={() => props.updateFormValue(props.schema, { [content.value]: !props.form.addProduct[content.value] })}
      value={1}
      checked={props.form.addProduct[content.value]}
    />
  );
};

export default CustomSwitch;

CustomSwitch.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
};
