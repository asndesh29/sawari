import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card, Elevation, Button } from '@blueprintjs/core';
import HorizontalScrollView from 'react-horizontal-scrolling-menu';
import { ENDPOINT } from '../../../../config';

const ProductCard = (obj, cardOnClickHandler) => {
  return (
    <Card
      interactive
      className="product-card"
      style={{ height: 130, width: 140, overflow: 'hidden' }}
      onClick={() => cardOnClickHandler(obj)}
    >
      <img src={`${ENDPOINT}/images/${obj.brandImageUrl}`} alt={obj.brandName} style={{ height: 100, width: 120 }} />
      <span>{obj.brandName}</span>
    </Card>
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, stypeId: null };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id, stypeId: obj.stypeId });
  }

  render() {
    const { main, updateMainValue } = this.props;
    const { showProductDtails, stypeId } = this.state;
    return (
      <div elevation={0} className="home-product-list" style={{ width: '100%', margin: 0, padding: 0 }}>
        {showProductDtails && <Redirect to={`/brand/${stypeId}/${showProductDtails}`} />}
        {/* <div style={{ height: 1, background: '#f1f1f1', margin: 0, marginTop: -22, marginBottom: 5 }} /> */}
        <div className="product-list">
          <div style={{ width: '100%', textAlign: 'center', height: '100%', marginTop: 5 }}>
            <HorizontalScrollView
              // wheel
              data = {main.initialData.vehicleBrand ? main.initialData.vehicleBrand.filter(obj => obj.stypeId === 2).map((obj) => ProductCard(obj, this.cardOnClickHandler)) : []}
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
