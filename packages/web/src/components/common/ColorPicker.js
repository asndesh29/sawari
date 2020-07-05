import React from 'react';
import PropTypes from 'prop-types';
import { CompactPicker } from 'react-color';
import { Button, Popover } from '@blueprintjs/core';

class CustomColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPicker: false };
  }

  pickerToggleHandler = () => {
    const { showPicker } = this.state;
    this.setState({ showPicker: !showPicker });
  }

  onColorChange = (color) => {
    // console.log('color', color);
    const { props, content } = this.props;
    const { updateFormValue, schema } = props;
    updateFormValue(schema, { [content.value]: color.hex });
  }

  onPopoverClose = () => {
    this.setState({ showPicker: false });
  }

  render() {
    const { content, props } = this.props;
    const { label } = content;
    // console.log('ColorPicker', this.props);
    const { showPicker } = this.state;
    return (
      <div style={{ margin: 10, marginLeft: 0 }}>
        <span>{label}</span>
        <Popover isOpen={showPicker} onClose={this.onPopoverClose} content={<CompactPicker onChangeComplete={this.onColorChange} />}>
          <Button style={{ background: props.form[props.schema][content.value] || 'black', marginLeft: 5 }} onClick={this.pickerToggleHandler} />
        </Popover>
      </div>

    );
  }
}

export default CustomColorPicker;

CustomColorPicker.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};
