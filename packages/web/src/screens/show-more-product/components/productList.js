import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import listProvider from './listProvider';


class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: null, usedVehicleDetails: null };
  }

  render() {
    const { main, match } = this.props;
    return (
      <div className="search-product-list">
        <div className="product-list">
          {main.initialData.vehicleModel ? listProvider(this.props) : []}
        </div>
      </div>
    );
  }
}
export default ProductList;
ProductList.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
