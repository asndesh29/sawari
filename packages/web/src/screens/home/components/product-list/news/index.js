import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Card } from '@blueprintjs/core';
import newsCard from './newsCard';

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
      <div className="home-product-list news">
        {showProductDtails && <Redirect to={`/brand/${stypeId}/${showProductDtails}`} />}
        <div className="product-list-header">
          <h2>News</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }} className="row">
          {main.initialData.News ? main.initialData.News.slice(0, 4).map((obj) => newsCard(obj, this.cardOnClickHandler)) : []}
        </div>
        <div className="link">
          <Link to="/more/news" class="more"><span style={{ fontWeight: 'bold' }}>More News</span></Link>
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
