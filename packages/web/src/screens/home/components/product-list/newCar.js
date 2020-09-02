import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card, Elevation, Button } from '@blueprintjs/core';
import ModelCard from '../../../common/modelCard';
import HorizontalScrollbar from '../../../../components/common/HorizontalScroller';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { main, updateMainValue, category } = this.props;
    const data = main.initialData.vehicleModel ? main.initialData.vehicleModel.filter(c => c.stypeId === 1 && c.category === category).map((obj) => ModelCard(obj)) : [];
    return (
      <div>
        <div style={{ height: 1, background: '#f1f1f1', margin: 0, marginTop: -22 }} />
        <div style={{ width: '100%', textAlign: 'center', height: 'auto', padding: 0, marginTop: 5 }}>
          <HorizontalScrollbar data={data} items="4" />
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
