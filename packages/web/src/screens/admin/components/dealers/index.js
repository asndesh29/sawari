import React from 'react';
import { Button } from '@blueprintjs/core';
import AddDealerForm from './addDealerForm';
import DealerList from './dealerList';
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
        <div className="admin-add-brand-menu" style={{ height: 100 }}>
          <div className="admin-add-brand-menu-filter">
            <Filter {...this.props}/>
          </div>
          <Button rightIcon="plus" text="Add Dealer" onClick={this.toggleAddBrand}/>
        </div>
        <div className="admin-add-brand-content">
          <AddDealerForm isOpen={isAddBrandOpen} onClose={this.toggleAddBrand} props={this.props} />
          <DealerList {...this.props} />
        </div>
      </div>
    );
  }
}
export default ProfileSetttings;
