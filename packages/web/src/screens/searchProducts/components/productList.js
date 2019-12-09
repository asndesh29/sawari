import React from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Elevation } from '@blueprintjs/core';
import { ENDPOINT } from '../../../config';

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

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showProductDtails: null };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  render() {
    const { main } = this.props;
    const { showProductDtails } = this.state;
    return (
      <div className="search-product-list">
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        <div className="product-list">
          {main.multiSearchResult.productList ? main.multiSearchResult.productList.map((obj) => ProductCard(obj, this.cardOnClickHandler)) : []}
        </div>
      </div>
    );
  }
}
export default ProductList;
