import React from 'react';
import { Button } from '@blueprintjs/core';
import AddBrandForm from './addVideosForm';
import BrandList from './videoList';

class ProfileSetttings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddVideoOpen: false,
    };
  }

  toggleAddVideo = () => {
    const { isAddVideoOpen } = this.state;
    this.setState({ isAddVideoOpen: !isAddVideoOpen });
  }

  render() {
    const { isAddVideoOpen } = this.state;
    return (
      <div className="admin-add-brand">
        <div className="admin-add-brand-menu">
          {/* <Filter {...this.props} /> */}
          <Button rightIcon="plus" text="Add Videos" onClick={this.toggleAddVideo} />
        </div>
        <div className="admin-add-brand-content">
          <AddBrandForm isOpen={isAddVideoOpen} onClose={this.toggleAddVideo} props={this.props} />
          <BrandList {...this.props} />
        </div>
      </div>
    );
  }
}
export default ProfileSetttings;
