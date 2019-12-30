import React from 'react';
import PropTypes from 'prop-types';
import { Button, Intent, Spinner, Label } from '@blueprintjs/core';

const CustomButton = ({ content, props }) => {

  const { schema, form, submitFormHandler } = props;
  return (
    <div>
      <div style={{ height: 'auto', minHeight: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {props.form[props.schema].loading && <Spinner intent={Intent.PRIMARY} size={40} />}
        {props.form[props.schema].error && <Label style={{ fontSize: 20, color: 'red' }}>{props.form[props.schema].error}</Label>}
        {props.form[props.schema].success && <Label style={{ fontSize: 20, color: 'green' }}>{props.form[props.schema].success}</Label>}
      </div>
      <Button
        onClick={() => props.submitFormHandler(props.schema)}
        type={content.type}
        className="pt-large"
        intent={Intent[content.intent]}
        text={content.text}
        fill
        large
        disabled={props.form[props.schema].loading}
        style={{ ...content.style }}
      />
    </div>
  );
};
CustomButton.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default CustomButton;
