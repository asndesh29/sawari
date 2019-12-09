import React from 'react';
import AddBrandForm from './addBrandForm';
import EnquiryList from './EnquiryList';

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
        <div className="admin-add-brand-menu" style={{ display: 'flex', justifyContent: 'center'}}>
          <h3 style={{ color: 'yellow' }}>User Enquiry</h3>
        </div>
        <div className="admin-add-brand-content">
          <AddBrandForm isOpen={isAddBrandOpen} onClose={this.toggleAddBrand} props={this.props} />
          <EnquiryList {...this.props} />
        </div>
      </div>
    );
  }
}
export default ProfileSetttings;
