import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import HorizontalScrollView from '../../../../components/common/HorizontalScroller';
import ModelCard from '../../../common/modelCard';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { main, category } = this.props;
    return (
      <div className="home-product-list" style={{ width: '100%', margin: 0, padding: 0 }}>
        <div style={{ height: 1, background: '#f1f1f1', margin: 0, marginTop: -22 }} />
        <HorizontalScrollView
          items="4"
          data={main.initialData.vehicleModel ? main.initialData.vehicleModel.filter(m => m.varients.find(v => v.bodyType === 'Scooter')).filter(c => c.stypeId === 2 && c.category === category).map((obj) => ModelCard(obj)) : []}
        />
      </div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  category: PropTypes.string.isRequired,
};
