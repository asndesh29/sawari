import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import listProvider from './listProvider';


class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: null, usedVehicleDetails: null };
  }

  cardOnClickHandler = (obj, type) => {
    console.log('card on click listener', obj);
    if (type === 'used') {
      this.setState({ usedVehicleDetails: obj });
    }
    if (type === 'new') {
      this.setState({ showProductDtails: obj });
    }
  }

  render() {
    const { main } = this.props;
    const { showProductDtails, usedVehicleDetails } = this.state;
    return (
      <div className="search-product-list">
        {showProductDtails && <Redirect to={`/details/${showProductDtails.name.replace(/\s/g, '')}-${showProductDtails.id}`.toLocaleLowerCase()} />}
        {usedVehicleDetails && <Redirect to={`/used-vehicle/details/${usedVehicleDetails.model.replace(/\s/g, '')}-${usedVehicleDetails.id}`.toLocaleLowerCase()} />}
        <div className="product-list">
          {main.initialData.vehicleModel ? listProvider(this.props, this.cardOnClickHandler) : []}
        </div>
      </div>
    );
  }
}
export default ProductList;
ProductList.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
