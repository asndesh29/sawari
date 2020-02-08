/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
      style={{ height: 130, width: 140 }}
      // onClick={() => cardOnClickHandler(obj)}
    >
      <img src={`${ENDPOINT}/brand_image/${obj.brandImageUrl}`} alt={obj.brandName} style={{ height: 100, width: 120 }} onClick={() => cardOnClickHandler(obj)} />
      <span>{obj.brandName}</span>
    </Card>
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brandName: null, stypeId: 'cars' };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ brand: obj, stypeId: obj.stypeId });
  }

  render() {
    const { main, updateMainValue } = this.props;
    const { brand, stypeId } = this.state;
    return (
      <Card elevation={0} className="home-product-list">
        {brand && <Redirect to={`car/brand/${brand.brandName.replace(/\s/g, '')}-${brand.id}`.toLocaleLowerCase()} />}
        <div className="product-list-header">
          <h2>Popular Car Brands</h2>
        </div>
        <div className="product-list">
          <div style={{ width: '100%', textAlign: 'center' }}>
            <HorizontalScrollView
              // wheel
              data = {main.initialData.vehicleBrand ? main.initialData.vehicleBrand.filter(obj => obj.stypeId === 1).map((obj) => ProductCard(obj, this.cardOnClickHandler)) : []}
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
      </Card>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
