import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@blueprintjs/core';
import TopBikeBrands from '../topBikeBrand';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Card elevation={0} className="home-product-list">
        <div style={{ width: '100%' }}><h2 style={{ margin: 0 }}>Popular Bike and Scooter Brands</h2></div>
        <TopBikeBrands {...this.props} />
      </Card>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
