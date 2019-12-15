import React from 'react';
import PropTypes from 'prop-types';
import { FileInput } from '@blueprintjs/core';

class _FileInput extends React.Component {
  state = { fileInputText: null };

  render() {
    // console.log('props in file browser', this.props);
    const { content, props } = this.props;
    const { schema } = props;
    const { fileInputText } = this.state;
    return (
      <FileInput
        onInputChange={(e) => {
          props.updateFormValue(schema, { image: e.target.files[0] });
          this.setState({ fileInputText: e.target.value });
        }}
        text={fileInputText || content.placeHolder}
        style={{ marginLeft: 5 }}
      />
    );
  }
}
export default _FileInput;
_FileInput.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};
