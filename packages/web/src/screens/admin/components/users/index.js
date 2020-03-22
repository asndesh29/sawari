import React from 'react';
import { Button } from '@blueprintjs/core';
import AddUserForm from './addUserForm';
import UserList from './userList';
import Filter from './filter';

class ProfileSetttings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddBrandOpen: false,
    };
  }

  toggleAddBrand = () => {
    const { isAddBrandOpen } = this.state;
    this.setState({ isAddBrandOpen: !isAddBrandOpen });
  }

  render() {
    const { isAddBrandOpen } = this.state;
    return (
      <div className="admin-add-brand">
        <div className="admin-add-brand-menu" style={{ height: 'auto'}}>
          <Filter {...this.props} />
          <Button rightIcon="plus" text="Add User" onClick={this.toggleAddBrand} />
        </div>
        <div className="admin-add-brand-content">
          <AddUserForm isOpen={isAddBrandOpen} onClose={this.toggleAddBrand} props={this.props} />
          <UserList {...this.props} />
        </div>
      </div>
    );
  }
}
export default ProfileSetttings;
