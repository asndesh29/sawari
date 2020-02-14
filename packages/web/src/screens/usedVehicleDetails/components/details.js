import React from 'react';
import PropTypes from 'prop-types';
import { ENDPOINT } from '../../../config';
import Overview from './overview';
import EnquiryForm from '../../common/EnquiryForm';

class UsedVehicleDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enquiryShow: false };
  }

  closeEnquiry = () => {
    const { enquiryShow } = this.state;
    this.setState({ enquiryShow: !enquiryShow });
  }

  render() {
    const { main, match } = this.props;
    const { enquiryShow } = this.state;
    const currentUsedVehicleDetails = main.initialData.usedVehicle.find((uv) => `${uv.model.replace(/\s/g, '')}-${uv.id}`.toLocaleLowerCase() === match.params.usedVehicleId)
    const brand = main.initialData.vehicleBrand.find(b => b.id === currentUsedVehicleDetails.sbId);
    console.log('Current Used Vehicle', currentUsedVehicleDetails);
    return (
      <div className="product-detail" style={{ width: '100%'}}>
        <Overview {...this.props} showEnquiryForm={this.closeEnquiry} currentUsedVehicleDetails={{ ...currentUsedVehicleDetails, brand: brand.brandName, taxClearance: currentUsedVehicleDetails.taxClearance === '1' ? 'yes' : 'No' }} />
        <EnquiryForm isOpen={enquiryShow} onClose={this.closeEnquiry} props={{ ...this.props }} />
      </div>
    );
  }
}

export default UsedVehicleDetails;
UsedVehicleDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
