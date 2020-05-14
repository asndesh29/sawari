import React from 'react';
import { Button, Popover, Dialog, Intent, Spinner } from '@blueprintjs/core';
import Table from '../../../../components/common/Table';
import { ENDPOINT } from '../../../../config';

const PopUp = (props) => {
  const { isOpen, handleClose, title, children } = props;
  return (
    <Dialog
      isOpen={isOpen}
      title={title}
      canEscapeKeyClose
      canOutsideClickClose
      onClose={handleClose}
      {...props}
    >
      {children}
    </Dialog>
  );
};

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdate: false,
      showDelete: false,
      loading: null,
      success: null,
      error: null,
    };
  }

  toggleAddBrandForm = () => {
    this.setState({ showUpdate: !this.state.showUpdate });
  }

  toggleDelete = () => {
    this.setState({ showDelete: !this.state.showDelete });
  }

  updateBrand = (id) => {
    console.log('update brand called', id);
    const { main, updateFormValue, form, changeScreen } = this.props;
    const newsToUpdate = main.initialAdminData.News.find(vb => vb.id === id);
    updateFormValue('News', { ...form.News, ...newsToUpdate });
    this.setState({ showUpdate: true });
    changeScreen();
  }

  deleteBrand = (id) => {
    console.log('delete news called', id);
    this.setState({ showDelete: id });
  }

  mainDelete = async () => {
    const { deleteNews } = this.props;
    const { showDelete } = this.state;
    this.setState({ loading: true, success: null, error: null });
    const res = await deleteNews(showDelete);
    if (res) {
      this.setState({ loading: null, success: 'Successfully deleted' });
    } else {
      this.setState({ loading: null, error: 'Faild to delete' });
    }
  }

  render() {
    console.log('props in news list',this.props);
    const { main, form } = this.props;
    const { showDelete, showUpdate, loading, error, success } = this.state;
    return (
      <div>
        <div style={{ width: '100%' }}>
          {main.initialAdminData.News && (
            <Table
              headers={{ id: 'Id', header: 'Header', image: 'Image', update: 'Update', delete: 'Delete' }}
              data={main.initialAdminData.News.map(obj => (
                {
                  ...obj,
                  image: <img src={`${ENDPOINT}/images/${obj.image}`} style={{ width: 50, height: 50 }}/>,
                  update: <Button text="Update" intent={Intent.SUCCESS} onClick={() => this.updateBrand(obj.id)} />,
                  delete: <Button text="Delete" intent={Intent.DANGER} onClick={() => this.deleteBrand(obj.id)} />,
                }
              ))}
            />
          )}
        </div>
        <PopUp
          isOpen={showDelete}
          title="Delete Confirmation"
          handleClose={this.toggleDelete}
          {...this.props}
          style={{ width: '300px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 0 0 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', flexDirection: 'column' }}>
              Are You sure want to delete?
              {loading && <Spinner intent="primary" size={15} />}
              {error && <span style={{ color: 'red' }}>{error}</span>}
              {success && <span style={{ color: 'green'}} >{success}</span>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button text="Yes" intent={Intent.DANGER} style={{ margin: '5px 5px 0 0' }} onClick={this.mainDelete} />
              <Button text="No" intent={Intent.SUCCESS} style={{ margin: '5px 5px 0 0' }} onClick={this.toggleDelete} />
            </div>
          </div>
        </PopUp>
      </div>
    );
  }
}
export default NewsList;
