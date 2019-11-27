import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextArea } from '@blueprintjs/core';
import PropTypes from 'prop-types';

class CustomTextArea extends Component {
  state = {}

  render() {
    const { props, content, inputVlaue } = this.props;
    return (
      <TextArea
        fill
        style={{ marginBottom: 5, height: 200 }}
        value={inputVlaue} //eslint-disable-line
        placeholder={content.placeHolder}
        onChange={event => props.updateFormValue(props.schema, { [content.value]: event.target.value })} //eslint-disable-line
      />
    );
  }
}

CustomTextArea.propTypes = {
  props: PropTypes.shape({
    form: PropTypes.object,
    updateFormValue: PropTypes.func,
    schema: PropTypes.string,
  }).isRequired,
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  inputVlaue: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({ inputVlaue: state.form[ownProps.props.schema][ownProps.content.value] });

export default connect(mapStateToProps)(CustomTextArea);
