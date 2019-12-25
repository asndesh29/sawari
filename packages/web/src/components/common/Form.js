import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '@blueprintjs/core';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import RadioGroup from './RadioGroup';
import FileInput from './FileInput';
import TextArea from './TextArea';
import Switch from './Switch';
import ImageGroup from './imageGroup';

const renderFormElementHandler = (content, idx, props) => {
  switch (content.element) {
    case 'input':
      return <Input content={content} props={props} key={idx} />;
    case 'button':
      return <Button content={content} props={props} key={idx} />;
    case 'select':
      return <Select content={content} props={props} key={idx} />;
    case 'radiogroup':
      return <RadioGroup content={content} props={props} key={idx} />;
    case 'fileinput':
      return <FileInput content={content} props={props} key={idx} />;
    case 'textArea':
      return <TextArea content={content} props={props} key={idx} />;
    case 'switch':
      return <Switch content={content} props={props} key={idx} />;
    case 'imageGroup':
      return <ImageGroup content={content} props={props} key={idx} />;
    default:
      return null;
  }
};

const Form = (props) => {
  const { contents } = props;
  return (
    <FormGroup style={{ display: 'flex', flex: 1, width: '100%' }}>
      {contents.map((content, idx) => renderFormElementHandler(content, idx, props))}
    </FormGroup>
  );
};

Form.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Form;
