import React from 'react';
import { Button } from '@blueprintjs/core';
import AddBrandForm from './addBrandProductForm';
import BrandList from './brandProductList';
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
          <Button rightIcon="plus" text="Add Product" onClick={this.toggleAddBrand}/>
        </div>
        <div className="admin-add-brand-content">
          <AddBrandForm isOpen={isAddBrandOpen} onClose={this.toggleAddBrand} props={this.props} />
          <BrandList {...this.props} />
        </div>
      </div>
    );
  }
}
export default ProfileSetttings;
