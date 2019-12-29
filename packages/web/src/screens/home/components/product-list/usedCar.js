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
      elevation={Elevation.TWO}
      className="product-card"
      style={{ height: 240, width: 250 }}
      onClick={() => cardOnClickHandler(obj)}
    >
      <img src={`${ENDPOINT}/images/${obj.image1}`} alt={obj.brandName} style={{ height: 170, width: 230 }} />
      <span style={{ fontWeight: 'bold' }}>{obj.vehicleName}</span>
      <span>{`Rs ${obj.expectedPrice}/-`}</span>
    </Card>
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentUsedVehicleDetails', obj);
    this.setState({ showProductDtails: obj.id });
  }

  render() {
    const { main, updateMainValue } = this.props;
    const { showProductDtails } = this.state;
    return (
      <div className="home-product-list" style={{ width: '100%', margin: 0, padding: 0 }}>
        {showProductDtails && <Redirect to={`/used-vehicle/details/${showProductDtails}`} />}
        <div style={{ height: 1, background: '#f1f1f1', margin: 0, marginTop: -22 }}/>
        <div className="product-list">
          <div style={{ width: '100%', textAlign: 'center', height: '100%'}}>
            <HorizontalScrollView
              // wheel
              data = {main.initialData.usedVehicle ? main.initialData.usedVehicle.filter(c => c.stypeId === 1).map((obj) => ProductCard(obj, this.cardOnClickHandler)) : []}
              arrowRight={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-right" />}
              arrowLeft={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-left" />}
              // onSelect={(key) => console.log('seleceed', key)}
              clickWhenDrag={false}
              alignOnResize
              hideSingleArrow
              hideArrows
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
