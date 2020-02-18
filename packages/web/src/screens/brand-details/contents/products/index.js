import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ProductCard from './productCard';
import PriceRange from '../../../common/filters/priceRange';
import VehicleType from '../../../common/filters/vehicleType';
import FuelType from '../../../common/filters/fuelType';
import { filterHandler } from '../../../common/filters/filterActionHandler';
import EnqueryForm from '../../../common/EnquiryForm';

const brandFilter = (props) => {
  const { match } = props;
  const { url, params, path } = match;
  switch (path) {
    case '/car/brand/:brandName':
      return (
        <div className="side-menu">
          <PriceRange {...props} bike />
          <VehicleType {...props} car />
          <FuelType {...props} car />
        </div>
      );
    case '/bike/brand/:brandName':
      return (
        <div className="side-menu">
          <PriceRange {...props} bike />
          <VehicleType {...props} bike />
          <FuelType {...props} bike />
        </div>
      );
    default:
      return null;
  }
};

brandFilter.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const brandProductListProvider = (props, cardOnClickHandler, enquiryFormToggleHandler) => {
  const { match, main } = props;
  const { url, path, params } = match;
  const sbId = main.initialData.vehicleBrand.find((b) => (`${b.brandName.replace(/\s/g, '')}-${b.id}`.toLocaleLowerCase() === params.brandName)).id;
  // console.log('sbId', sbId, params);
  switch (path) {
    case '/car/brand/:brandName':
      return (
        <div className="brand-product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {main.initialData.vehicleModel ? filterHandler(props, main.initialData.vehicleModel.filter((c) => ((c.stypeId === 1) && (c.sbId === sbId)))).map((obj) => ProductCard(obj, cardOnClickHandler, enquiryFormToggleHandler)) : []}
        </div>
      );
    case '/bike/brand/:brandName':
      return (
        <div className="brand-product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {main.initialData.vehicleModel ? filterHandler(props, main.initialData.vehicleModel.filter((c) => ((c.stypeId === 2) && (c.sbId === sbId)))).map((obj) => ProductCard(obj, cardOnClickHandler, enquiryFormToggleHandler)) : []}
        </div>
      );
    default:
      return null;
  }
};

brandProductListProvider.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, showEnquiry: false };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj });
  }

  enquiryFormToggleHandler = () => {
    console.log('form toggle called');
    this.setState({ showEnquiry: !this.state.showEnquiry });
  }

  render() {
    const { showProductDtails, showEnquiry } = this.state;
    return (
      <div className="main-brand-product">
        {showProductDtails && <Redirect to={`/details/${showProductDtails.name.replace(/\s/g, '')}-${showProductDtails.id}`.toLocaleLowerCase()} />}
        {brandFilter(this.props)}
        {brandProductListProvider(this.props, this.cardOnClickHandler, this.enquiryFormToggleHandler)}
        <EnqueryForm onClose={this.enquiryFormToggleHandler} isOpen={showEnquiry} props={this.props} />
      </div>
    );
  }
}

export default Index;
Index.propTypes = {
  updateMainValue: PropTypes.func.isRequired,
};
