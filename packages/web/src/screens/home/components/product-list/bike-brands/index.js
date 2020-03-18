import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import HorizontalScrollbar from '../../../../../components/common/HorizontalScroller';
import BrandCard from '../../../../common/brandCard';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { main } = this.props;
    const data = main.initialData.vehicleBrand ? main.initialData.vehicleBrand.filter(obj => obj.stypeId === 2).map((obj) => BrandCard(obj, 'bike')) : [];
    return (
      <Card elevation={0} className="home-product-list">
        <div className="product-list-header">
          <h2>Popular Bike and Scooter Brands</h2>
        </div>
        <HorizontalScrollbar data={data} />
      </Card>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
