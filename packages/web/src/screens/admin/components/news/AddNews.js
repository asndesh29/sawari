import React from 'react';
import PropTypes from 'prop-types';
import { Button, Intent } from '@blueprintjs/core';
import { Editor } from '@tinymce/tinymce-react';
import Form from '../../../../components/common/Form';
import formStructure from './formStructure';
import { ENDPOINT } from '../../../../config';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  handleEditorChange = (content, editor) => {
    const { updateFormValue } = this.props;
    updateFormValue('News', { content });
  }

  newsSaveHandler = () => {
    const { addAndUpdateNews, changeScreen } = this.props;
    addAndUpdateNews();
    changeScreen();
  }

  render() {
    const { form, changeScreen } = this.props;
    const { image, image1, image2, image3, image4, loading } = form.News;
    return (
      <div style={{ width: '100%', padding: 10, color: 'black', display: 'flex', flexDirection: 'column' }}>
        <div>
          <form style={{ width: '100%' }}>
            <Form contents={formStructure()} {...this.props} schema="News" />
          </form>
        </div>
        {image && <span>{`${ENDPOINT}/images/${image}`}</span>}
        {image1 && <span>{`${ENDPOINT}/images/${image1}`}</span>}
        {image2 && <span>{`${ENDPOINT}/images/${image2}`}</span>}
        {image3 && <span>{`${ENDPOINT}/images/${image3}`}</span>}
        {image4 && <span>{`${ENDPOINT}/images/${image4}`}</span>}
        <Editor
          initialValue={`${form.News.content ? form.News.content : '<p>Write news here...</p>'}`}
          apiKey="p1bylae99q4eca5xa0pa7eando0vekbc46lcpwq3azoaifqq"
          init={{
            height: '700',
            width: '100%',
            marginTop: '10',
            menubar: false,
            branding: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              ' image undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={this.handleEditorChange}
        />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', marginTop: 10 }}>
          <Button loading={loading} intent={Intent.SUCCESS} text="Save" onClick={this.newsSaveHandler} />
        </div>
      </div>
    );
  }
}

export default News;
News.propTypes = {
  addAndUpdateNews: PropTypes.func.isRequired,
  updateFormValue: PropTypes.func.isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
};
