import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Card, Tabs, Tab } from '@blueprintjs/core';
import NewCar from '../newCar';
import PopularCar from '../mostPopularCar';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, selectedTabId: 'New' };
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
        <div style={{ width: '100%' }}><h2 style={{ margin: 0 }}>Cars</h2></div>
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="New" title="New" panel={<NewCar {...this.props} />} />
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Popular" title="Popular" panel={<PopularCar {...this.props} />} panelClassName="ember-panel" />
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Upcoming" title="Upcoming" panel={<PopularCar {...this.props} />} />
        </Tabs>
        <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
          <Link to="/"><span style={{ fontWeight: 'bold'}}>More Cars</span></Link>
        </div>
      </Card>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
