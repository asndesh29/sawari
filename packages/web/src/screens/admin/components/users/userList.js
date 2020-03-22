import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, Intent, Spinner } from '@blueprintjs/core';
import Table from '../../../../components/common/Table';
import AddBrand from './addUserForm';

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

PopUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

class UserList extends React.Component {
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
    const { showUpdate } = this.state;
    this.setState({ showUpdate: !showUpdate });
  }

  toggleDelete = () => {
    const { showDelete } = this.state;
    this.setState({ showDelete: !showDelete });
  }

  updateUser = (record) => {
    console.log('update brand called', record);
    const { updateFormValue } = this.props;
    updateFormValue('User', record);
    this.setState({ showUpdate: true });
  }

  deleteBrand = (id) => {
    console.log('delete brand called', id);
    this.setState({ showDelete: id });
  }

  mainDelete = async () => {
    const { deleteUser } = this.props;
    const { showDelete } = this.state;
    this.setState({ loading: true });
    const res = await deleteUser(showDelete.id);
    if (res) {
      this.setState({ loading: null, success: 'Successfully deleted' });
    } else {
      this.setState({ loading: null, error: 'Faild to delete' });
    }
  }

  render() {
    const { main, form } = this.props;
    const { showDelete, showUpdate, loading, error, success } = this.state;
    return (
      <div className="admin-add-brand-content-table">
        <div style={{ maxWidth: '100%' }}>
          {main.initialAdminData.User && (
            <Table
              headers={{ id: 'Id', name: 'Name', userName: 'User Name', plainPassword: 'Password', type: 'Type', update: 'Update', delete: 'Delete' }}
              data={main.initialAdminData.User.filter((u) => u.type === form.User.type).map((obj) => (
                {
                  ...obj,
                  update: <Button text="Update" intent={Intent.SUCCESS} onClick={() => this.updateUser(obj)} />,
                  delete: <Button text="Delete" intent={Intent.DANGER} onClick={() => this.deleteBrand(obj)} />,
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
        <AddBrand isOpen={showUpdate} onClose={this.toggleAddBrandForm} props={this.props} update />
      </div>
    );
  }
}

export default UserList;

UserList.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  deleteUser: PropTypes.func.isRequired,
  updateFormValue: PropTypes.func.isRequired,
};
