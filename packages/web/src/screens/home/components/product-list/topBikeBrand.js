import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from '@blueprintjs/core';
import HorizontalScrollView from 'react-horizontal-scrolling-menu';
import { ENDPOINT } from '../../../../config';

const ProductCard = (obj) => {
  return (
    <Link to={`bike/brand/${obj.brandName.replace(/\s/g, '')}-${obj.id}`.toLocaleLowerCase()} style={{ textDecoration: 'none', color: 'black' }}>
      <Card
        interactive
        className="product-card"
        style={{ height: 130, width: 140, overflow: 'hidden' }}
      >
        <img src={`${ENDPOINT}/brand_image/${obj.brandImageUrl}`} alt={obj.brandName} style={{ height: 100, width: 120 }} />
        <span>{obj.brandName}</span>
      </Card>
    </Link>
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { main } = this.props;
    return (
      <div elevation={0} className="home-product-list" style={{ width: '100%', margin: 0, padding: 0 }}>
        {/* <div style={{ height: 1, background: '#f1f1f1', margin: 0, marginTop: -22, marginBottom: 5 }} /> */}
        <div className="product-list">
          <div style={{ width: '100%', textAlign: 'center', height: '100%', marginTop: 5 }}>
            <HorizontalScrollView
              // wheel
              data = {main.initialData.vehicleBrand ? main.initialData.vehicleBrand.filter(obj => obj.stypeId === 2).map((obj) => ProductCard(obj)) : []}
              arrowRight={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-right" />}
              arrowLeft={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-left" />}
              // onSelect={(key) => console.log('seleceed', key)}
              clickWhenDrag={false}
              alignOnResize
              hideSingleArrow
              scrollBy={3}
              clickWhenDrag={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
