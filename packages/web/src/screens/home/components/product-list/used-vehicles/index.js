import React from 'react';
import PropTypes from 'prop-types';
import { Card, Tabs, Tab } from '@blueprintjs/core';
import Content from './content';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTabId: 'cars' };
  }

  handleTabChange = (id) => {
    this.setState({ selectedTabId: id });
  }

  render() {
    const { selectedTabId } = this.state;
    return (
      <div className="home-product-list">
        <div className="product-list-header"><h2 style={{ margin: 0 }}>Used</h2></div>
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
          <Tab id="cars" title="Cars" panel={<Content {...this.props} selectedTabId={selectedTabId} />} />
          <Tab id="bikes" title="Bikes" panel={<Content {...this.props} selectedTabId={selectedTabId} />} />
          <Tab id="scooters" title="Scooters" panel={<Content {...this.props} selectedTabId={selectedTabId} />} />
        </Tabs>
      </div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
