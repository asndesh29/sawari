import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card, Elevation } from '@blueprintjs/core';
import { ENDPOINT } from '../../../../config';

const ProductCard = (obj, cardOnClickHandler) => {
  return (
    <Card
      interactive
      elevation={Elevation.TWO}
      className="product-card"
      onClick={() => cardOnClickHandler(obj)}
    >
      <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.name} />
      <span>{obj.name}</span>
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
    const { main, updateMainValue } = this.props;
    const { showProductDtails } = this.state;
    return (
      <div className="home-product-list">
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        <div className="product-list-header">
          <h1>Top Products</h1>
        </div>
        <div className="product-list">
          {main.initialData.vehicleBrandProduct ? main.initialData.vehicleBrandProduct.map((obj) => ProductCard(obj, this.cardOnClickHandler)) : []}
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
