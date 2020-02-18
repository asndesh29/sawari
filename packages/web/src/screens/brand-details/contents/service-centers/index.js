import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import DealerCard from './dealerCard';
import Provices from '../../../common/filters/province';
import City from '../../../common/filters/cities';
import { serviceCenterShowroomFilterHandler } from '../../../common/filters/filterActionHandler';
import EnqueryForm from '../../../common/EnquiryForm';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, showEnquiry: false };
  }

  cardOnClickHandler = (obj) => {
    // const { updateMainValue } = this.props;
    // updateMainValue('currentCarDetail', obj);
    // this.setState({ showProductDtails: obj.id });
  }

  enquiryFormToggleHandler = () => {
    console.log('form toggle called');
    this.setState({ showEnquiry: !this.state.showEnquiry });
  }

  render() {
    const { main, updateMainValue, match } = this.props;
    const { showProductDtails, showEnquiry } = this.state;
    const { params } = match;
    const brand = main.initialData.vehicleBrand.find((b) => (`${b.brandName.replace(/\s/g, '')}-${b.id}`.toLocaleLowerCase() === params.brandName));
    return (
      <div className="main-brand-product">
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        <div className="side-menu">
          <Provices {...this.props} />
          <City {...this.props} />
        </div>
        <div className="brand-product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {main.initialData.serviceCenterList ? serviceCenterShowroomFilterHandler(this.props, main.initialData.serviceCenterList.filter(c => ((c.stypeId === brand.stypeId) && c.sbId === brand.id))).map((obj) => DealerCard(obj, this.cardOnClickHandler, this.enquiryFormToggleHandler)) : []}
        </div>
        <EnqueryForm onClose={this.enquiryFormToggleHandler} isOpen={showEnquiry} props={this.props} />
      </div>
    );
  }
}

export default Index;
Index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
