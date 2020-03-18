import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@blueprintjs/core';
import HorizontalScrollbar from '../../../../components/common/HorizontalScroller';
import BrandCard from '../../../common/brandCard';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { main } = this.props;
    const data = main.initialData.vehicleBrand ? main.initialData.vehicleBrand.filter((obj) => obj.stypeId === 1).map((obj) => BrandCard(obj, 'car')) : [];
    return (
      <Card elevation={0} className="home-product-list">
        <div className="product-list-header">
          <h2>Popular Car Brands</h2>
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
