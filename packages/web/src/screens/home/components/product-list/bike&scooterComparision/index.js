import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import productCompareCard from '../../../../common/productCompareCard';
import HorizontalScrollView from '../../../../../components/common/HorizontalScroller';

const carComparisonList = [
  { id: 1, pId1: 41, pId2: 43, compCount: 10 },
  { id: 1, pId1: 41, pId2: 43, compCount: 10 },
  { id: 1, pId1: 41, pId2: 43, compCount: 10 },
  { id: 1, pId1: 41, pId2: 43, compCount: 10 },
  { id: 1, pId1: 41, pId2: 43, compCount: 10 },
  { id: 1, pId1: 41, pId2: 43, compCount: 10 },
];

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { main } = this.props;
    return (
      <div className="home-product-list">
        <div className="product-list-header"><h2>Popular Bike & Scooter Comparisons</h2></div>
        <HorizontalScrollView
          items="4"
          data={main.initialData.vehicleBrandProduct ? [...carComparisonList.map(p => productCompareCard(p, { ...this.props, currentProductDetails: { stypeId: 2 } }))] : []}
        />
        <div className="link">
          <Link to="/compare/bike" className="more"><span>Compare More</span></Link>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
