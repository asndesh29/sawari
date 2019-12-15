import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card, Elevation, Spinner } from '@blueprintjs/core';
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
    this.state = { showProductDtails: null, searchResult: null };
  }

  async componentWillMount() {
    const { updateMainValue, form } = this.props;
    try {
      const { buttonType, brandId, budgetId, searchType, typeId } = form.multiSearch;
      const multiSearchRes = await axios.post(`${ENDPOINT}/web/multi-search`, { buttonType, brandId, budgetId, searchType, typeId });
      // console.log('multiSearch Res', multiSearchRes);
      if (multiSearchRes.status === 200) {
        this.setState({ searchResult: multiSearchRes.data });
        updateMainValue('multiSearchResult', null);
      }
    } catch (e) {
      console.error('Error in multiSearch', e);
    }
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  render() {
    const { main } = this.props;
    const { showProductDtails, searchResult } = this.state;
    return (
      <div className="search-product-list">
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        { searchResult ? (
          <div className="product-list">
            {searchResult.productList ? searchResult.productList.map((obj) => ProductCard(obj, this.cardOnClickHandler)) : []}
          </div>
        ) : <Spinner size={30} />
       }
      </div>
    );
  }
}
export default ProductList;
ProductList.propTypes = {
  updateMainValue: PropTypes.func.isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
};
