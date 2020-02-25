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
      <Card elevation={0} className="home-product-list">
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
