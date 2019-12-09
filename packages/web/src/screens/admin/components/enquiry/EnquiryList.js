import React from 'react';
import { Button, Popover, Dialog, Intent, Spinner } from '@blueprintjs/core';
import Table from '../../../../components/common/Table';
import { ENDPOINT } from '../../../../config';
import AddBrand from './addBrandForm';

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

class EnquiryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmail: false,
      showDelete: false,
      loading: null,
      success: null,
      error: null,
    };
  }

  toggleSendEmail = () => {
    this.setState({ showEmail: !this.state.showEmail });
  }

  toggleDelete = () => {
    this.setState({ showDelete: !this.state.showDelete });
  }

  sendEmail = (id) => {
    console.log('update brand called', id);
    const { main, updateFormValue } = this.props;
    const emailToSend = main.initialAdminData.userEnquiry.find(vb => vb.id === id);
    updateFormValue('sendEmail', { id, email: emailToSend.email });
    this.setState({ showEmail: true });
  }

  deleteBrand = (id) => {
    console.log('delete brand called', id);
    this.setState({ showDelete: id });
  }

  mainDelete = async () => {
    const { deleteBrand } = this.props;
    const { showDelete } = this.state;
    this.setState({ loading: true });
    // const res = await deleteBrand(showDelete);
    if (true) {
      this.setState({ loading: null, success: 'Successfully deleted'});
    } else {
      this.setState({ loading: null, error: 'Faild to delete' });
    }
  }

  render() {
    const { main, form } = this.props;
    const { showDelete, showEmail, loading, error, success } = this.state;
    return (
      <div className="admin-add-brand-content-table">
        <div style={{ width: '100%' }}>
          {main.initialAdminData.userEnquiry && (
            <Table
              headers={{ id: 'Id', name: 'Name', email: 'Email', phoneNo: 'Phone No.', address: 'Address', message: 'Message', sendEmail: 'Send Email', markRead: 'Mark Done', }}
              data={main.initialAdminData.userEnquiry.filter(vb => !vb.markStatus).map(obj => (
                {
                  ...obj,
                  sendEmail: <Button text="Send Email" intent={Intent.SUCCESS} onClick={() => this.sendEmail(obj.id)} />,
                  markRead: <Button rightIcon="tick" text="Mark Done" intent={Intent.DANGER} onClick={() => this.deleteBrand(obj.id)} />,
                }
              ))}
            />
          )}
        </div>
        <PopUp
          isOpen={showDelete}
          title="Confirmation"
          handleClose={this.toggleDelete}
          {...this.props}
          style={{ width: '300px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 0 0 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', flexDirection: 'column' }}>
              Are You sure want to mark done?
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
        <AddBrand isOpen={showEmail} onClose={this.toggleSendEmail} props={this.props} update />
      </div>
    );
  }
}
export default EnquiryList;
