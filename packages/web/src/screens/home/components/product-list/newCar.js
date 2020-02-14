import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card, Elevation, Button } from '@blueprintjs/core';
import HorizontalScrollView from 'react-horizontal-scrolling-menu';
import { ENDPOINT, APP_PRIMARY_COLOR } from '../../../../config';
import ModelCard from '../../../common/modelCard';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    this.setState({ showProductDtails: obj });
  }

  render() {
    const { main, updateMainValue, category } = this.props;
    const { showProductDtails } = this.state;
    return (
      <div className="home-product-list" style={{ width: '100%', margin: 0, padding: 0 }}>
        {showProductDtails && <Redirect to={`/details/${showProductDtails.name.replace(/\s/g, '')}-${showProductDtails.id}`.toLocaleLowerCase()} />}
        <div style={{ height: 1, background: '#f1f1f1', margin: 0, marginTop: -22 }} />
        <div className="product-list">
          <div style={{ width: '100%', textAlign: 'center', height: '100%', padding: 0, marginTop: 5 }}>
            <HorizontalScrollView
              data = {main.initialData.vehicleModel ? main.initialData.vehicleModel.filter(c => c.stypeId === 1 && c.category === category).map((obj) => ModelCard(obj, this.cardOnClickHandler)) : []}
              arrowRight={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-right" />}
              arrowLeft={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-left" />}
              clickWhenDrag={false}
              alignOnResize
              hideSingleArrow
              hideArrows
              scrollBy={3}
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
