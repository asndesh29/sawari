import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card, Elevation, Button } from '@blueprintjs/core';
import HorizontalScrollView from 'react-horizontal-scrolling-menu';
import { ENDPOINT } from '../../../config';

const ProductCard = (obj, cardOnClickHandler) => {
  return (
    <Card
      interactive
      elevation={Elevation.TWO}
      className="product-card"
      style={{ height: 240, width: 250, margin: 10, display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      onClick={() => cardOnClickHandler(obj)}
    >
      <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.brandName} style={{ height: 170, width: 200 }} />
      <span style={{ fontWeight: 'bold' }}>{obj.name}</span>
      <span>{`Rs ${obj.price}/-`}</span>
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
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  render() {
    const { main, updateMainValue, sbId, stypeId } = this.props;
    const { showProductDtails } = this.state;
    return (
      <div className="home-product-list">
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {main.initialData.vehicleBrandProduct ? main.initialData.vehicleBrandProduct.filter(c => ((c.stypeId === parseInt(stypeId, 10)) && c.sbId === parseInt(sbId, 10))).map((obj) => ProductCard(obj, this.cardOnClickHandler)) : []}
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
