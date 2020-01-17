import React from 'react';
import { Button } from '@blueprintjs/core';
import AddVarientModelForm from './addModelVarientForm';
import ModelVarientList from './modelVarientList';
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
    const { updateMainValue, updateFormValue } = this.props;
    this.setState({ isAddBrandOpen: !isAddBrandOpen });
    // updateMainValue('varientId', 'new');
  }

  render() {
    const { isAddBrandOpen } = this.state;
    return (
      <div className="admin-add-brand">
        <div className="admin-add-brand-menu" style={{ height: 'auto' }}>
          <div className="admin-add-brand-menu-filter">
            <Filter {...this.props}/>
          </div>
          <Button rightIcon="plus" text="Add Varient" onClick={this.toggleAddBrand} />
        </div>
        <div className="admin-add-brand-content">
          <AddVarientModelForm isOpen={isAddBrandOpen} onClose={this.toggleAddBrand} props={this.props} />
          <ModelVarientList {...this.props} />
        </div>
      </div>
    );
  }
}
export default ProfileSetttings;
