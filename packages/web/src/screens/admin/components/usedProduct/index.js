import React from 'react';
import { Button } from '@blueprintjs/core';
import AddUsedVehicleForm from './addUsedVehicleForm';
import UsedVehicleList from './sellVehicleList';
import Filter from './filter';

class ProfileSetttings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddUsedVehicleOpen: false,
    };
  }

  toggleAddUsedVehicle = () => {
    const { isAddUsedVehicleOpen } = this.state;
    this.setState({ isAddUsedVehicleOpen: !isAddUsedVehicleOpen });
  }

  render() {
    const { isAddUsedVehicleOpen } = this.state;
    return (
      <div className="admin-add-brand">
        <div className="admin-add-brand-menu" style={{ height: 'auto'}}>
          <div className="admin-add-brand-menu-filter">
            <Filter {...this.props} />
          </div>
          <Button rightIcon="plus" text="Add Used Vehicle" onClick={this.toggleAddUsedVehicle} />
        </div>
        <div className="admin-add-brand-content">
          <AddUsedVehicleForm isOpen={isAddUsedVehicleOpen} onClose={this.toggleAddUsedVehicle} props={this.props} />
          <UsedVehicleList {...this.props} />
        </div>
      </div>
    );
  }
}
export default ProfileSetttings;
