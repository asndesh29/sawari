import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CustomSelect = ({ content, props }) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <Select
        styles={{container: (provided, state) => ({
          ...provided,
          color: 'black',
        })}}
        options={content.options}
        isSearchable
        placeholder={content.placeHolder}
        onChange={e => props.updateFormValue(props.schema, { [content.value]: e.value })}
      />
    </div>
  );
};

export default CustomSelect;
CustomSelect.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func,
  schema: PropTypes.string,
};
