import React from 'react';
import axios from 'axios';
import FileInput from './_FileInput';
import { ENDPOINT } from '../../config';

const imagesComponent = (obj, props) => {
  // console.log('props in image components', obj, props);
  return (
    <div
      style={{ height: 60, width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5', margin: 2, fontSize: 15 }}
    >
      {!props.props.form[props.props.schema][obj.value] && obj.label}
      {props.props.form[props.props.schema][obj.value] && <img src={`${ENDPOINT}/images/${props.props.form[props.props.schema][obj.value]}`} style={{ width: 60, height: 60 }} /> }

    </div>
  );
};

class ImageGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fileOnchange = async (file, obj) => {
    console.log('file input value', file, obj, this.props);
    const { props } = this.props;
    const { schema } = props;
    try {
      const { props } = this.props;
      const { updateFormValue, form } = props;
      const formData = new FormData(); //eslint-disable-line
      formData.append('image', file);
      const uploadFileRes = await axios({
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
        method: 'post',
        url: `${ENDPOINT}/web/upload-file`,
        data: formData,
      });
      updateFormValue(schema, { ...form[schema], [obj.value]: uploadFileRes.data });
      console.log('uploadFileRes', uploadFileRes);
    } catch (e) {
      console.error('Error in image upload', e);
    }
  }

  render() {
    const { content } = this.props;
    return (
      <div>
        <span style={{ fontSize: 20 }}>{content.placeHolder}</span>
        <div style={{ display: 'flex' }}>
          {content.options.map(obj => <FileInput fileComponent={imagesComponent(obj, this.props)} fileOnchange={(file) => this.fileOnchange(file, obj)} />) }
        </div>
      </div>
    );
  }
}
export default ImageGroup;
