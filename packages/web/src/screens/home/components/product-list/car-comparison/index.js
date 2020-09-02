/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import productCompareCard from '../../../../common/productCompareCard';
import HorizontalScrollView from '../../../../../components/common/HorizontalScroller';

const carComparisonList = [
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 4, pId2: 9, compCount: 10 },
  { id: 1, pId1: 1, pId2: 10, compCount: 10 },
  { id: 1, pId1: 2, pId2: 13, compCount: 10 },
  { id: 1, pId1: 4, pId2: 5, compCount: 10 },
  { id: 1, pId1: 1, pId2: 15, compCount: 10 },
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
        <div className="product-list-header"><h2>Popular Car Comparisons</h2></div>
        <HorizontalScrollView
          items="4"
          data={main.initialData.vehicleBrandProduct ? [...carComparisonList.map(p => productCompareCard(p, { ...this.props, currentProductDetails: { stypeId: 1 } }))] : []}
        />
        <div className="link">
          <Link to="/compare/car" className="more"><span>Compare More</span></Link>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
