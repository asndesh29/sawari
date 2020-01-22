import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Card, Tabs, Tab } from '@blueprintjs/core';
import NewBikes from '../newBikes';
import PopularBikes from '../mostPopularBike';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, selectedTabId: 'Latest' };
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
        <div style={{ width: '100%' }}><h2 style={{ margin: 0 }}>Bikes</h2></div>
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Latest" title="Latest" panel={<NewBikes {...this.props} category="Latest" />} />
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Popular" title="Popular" panel={<PopularBikes {...this.props} category="Popular" />} />
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Upcoming" title="Upcoming" panel={<PopularBikes {...this.props} category="Upcoming" />} />
        </Tabs>
        <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
          <Link to="/more/bikes"><span style={{ fontWeight: 'bold'}}>More Bikes</span></Link>
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
