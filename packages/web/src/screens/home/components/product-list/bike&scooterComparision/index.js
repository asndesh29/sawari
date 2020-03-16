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
    this.state = { };
  }

  render() {
    const { main } = this.props;
    return (
      <Card className="home-product-list">
        <h2 style={{ margin: 0 }}>Popular Bike & Scooter Comparisons</h2>
        <HorizontalScrollView
          data={main.initialData.vehicleBrandProduct ? [...carComparisonList.map(p => productCompareCard(p, { ...this.props, currentProductDetails: { stypeId: 2 } }))] : []}
        />
        <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
          <Link to="/compare/bike"><span style={{ fontWeight: 'bold' }}>Compare More</span></Link>
        </div>
      </Card>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
