import React from 'react';
import { Button } from '@blueprintjs/core';
import AddModelForm from './addModelForm';
import BrandList from './modelList';
import Filter from './filter';

class ProfileSetttings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModelOpen: false,
    };
  }

  toggleAddModel = () => {
    const { isAddModelOpen } = this.state;
    this.setState({ isAddModelOpen: !isAddModelOpen });
  }

  render() {
    const { isAddModelOpen } = this.state;
    return (
      <div className="admin-add-brand">
        <div className="admin-add-brand-menu" style={{ height: 'auto' }}>
        <div className="admin-add-brand-menu-filter">
            <Filter {...this.props}/>
          </div>
          <Button rightIcon="plus" text="Add Model" onClick={this.toggleAddModel} />
        </div>
        <div className="admin-add-brand-content">
          <AddModelForm isOpen={isAddModelOpen} onClose={this.toggleAddModel} props={this.props} />
          <BrandList {...this.props} />
        </div>
      </div>
    );
  }
}
export default ProfileSetttings;
