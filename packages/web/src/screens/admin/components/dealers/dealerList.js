import React from 'react';
import { Button, Popover, Dialog, Intent, Spinner } from '@blueprintjs/core';
import Table from '../../../../components/common/Table';
import { ENDPOINT } from '../../../../config';
import AddDealerForm from './addDealerForm';

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

class BrandList extends React.Component {
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
    const { main, updateFormValue } = this.props;
    const brandToUpdate = main.initialAdminData.dealerList.find(vb => vb.id === id);
    updateFormValue('addDealer', { ...main.initialAdminData.dealerList, ...brandToUpdate });
    this.setState({ showUpdate: true });
  }

  deleteBrand = (id) => {
    console.log('delete brand called', id);
    this.setState({ showDelete: id });
  }

  mainDelete = async () => {
    const { deleteDealer } = this.props;
    const { showDelete } = this.state;
    this.setState({ loading: true, success: null, error: null });
    const res = await deleteDealer(showDelete);
    if (res) {
      this.setState({ loading: null, success: 'Successfully deleted'});
    } else {
      this.setState({ loading: null, error: 'Faild to delete' });
    }
  }

  render() {
    const { main, form } = this.props;
    const { showDelete, showUpdate, loading, error, success } = this.state;
    return (
      <div className="admin-add-brand-content-table">
        <div style={{ width: '100%' }}>
          {main.initialAdminData.dealerList && (
            <Table
              headers={{ id: 'Id', city: 'City', name: 'Name', description: 'Description', image: 'Image', update: 'Update', delete: 'Delete' }}
              data={main.initialAdminData.dealerList.filter(vp => (parseInt(vp.stypeId, 10) === parseInt(form.addDealer.stypeId, 10) && parseInt(vp.sbId, 10) === parseInt(form.addDealer.sbId, 10))).map(obj => (
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
        <AddDealerForm isOpen={showUpdate} onClose={this.toggleAddBrandForm} props={this.props} update />
      </div>
    );
  }
}
export default BrandList;
