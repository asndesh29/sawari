import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Card, Tabs, Tab } from '@blueprintjs/core';
import Content from './content';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, selectedTabId: 'cars' };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  handleTabChange = (id) => {
    console.log('tab id', id);
    this.setState({ selectedTabId: id });
  }

  render() {
    const { main, updateMainValue } = this.props;
    const { showProductDtails, selectedTabId } = this.state;
    return (
      <Card elevation={0} className="home-product-list">
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        <div style={{ width: '100%' }}><h2 style={{ margin: 0 }}>Used</h2></div>
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="cars" title="Cars" panel={<Content {...this.props} selectedTabId={selectedTabId} />} />
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="bikes" title="Bikes" panel={<Content {...this.props} selectedTabId={selectedTabId} />} />
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="scooters" title="Scooters" panel={<Content {...this.props} selectedTabId={selectedTabId} />} />
        </Tabs>
      </Card>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
