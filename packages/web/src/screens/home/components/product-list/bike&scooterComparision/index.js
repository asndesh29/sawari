import React from 'react';
import PropTypes from 'prop-types';
import HorizontalScrollView from 'react-horizontal-scrolling-menu';
import { Redirect, Link } from 'react-router-dom';
import { Card, Button } from '@blueprintjs/core';
import productCompareCard from '../../../../common/productCompareCard';

const carComparisonList = [
  { id: 1, pId1:2, pId2: 5, compCount: 10 },
  { id: 1, pId1:2, pId2: 5, compCount: 10 },
  { id: 1, pId1:2, pId2: 5, compCount: 10 },
  { id: 1, pId1:2, pId2: 5, compCount: 10 },
  { id: 1, pId1:2, pId2: 5, compCount: 10 },
  { id: 1, pId1:2, pId2: 5, compCount: 10 },
];

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, selectedTabId: 'Cars', selectedCity: null };
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
    const { main } = this.props;
    const { showProductDtails } = this.state;
    console.log('Bike comparison props', this.props);
    return (
      <Card style={{ background: 'white', width: '90%', marginTop: 10 }}>
        <h2 style={{ margin: 0 }}>Popular Bike & Scooter Comparisons</h2>
        <div style={{ marginRight: 20 }}>
          <div elevation={0} style={{ display: 'flex', flexWrap: 'wrap'}}>
            {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
            {/* {main.initialData.vehicleBrandProduct ? [carComparisonList.map(p => ProvinceDesign(p, main.initialData.vehicleBrandProduct)), <SelectProductForComparison {...this.props} />] : []} */}
            <div style={{ width: '100%', textAlign: 'center', height: 'auto' }}>
              <HorizontalScrollView
                // wheel
                data={main.initialData.vehicleBrandProduct ? [...carComparisonList.map(p => productCompareCard(p, main.initialData.vehicleBrandProduct))] : []}
                arrowRight={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-right" />}
                arrowLeft={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-left" />}
                onSelect={(key) => console.log('seleceed', key)}
                clickWhenDrag={false}
                alignOnResize
                hideSingleArrow
                hideArrows
                scrollBy={3}
              />
            </div>
          </div>
        </div>
        <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
          <Link to="/"><span style={{ fontWeight: 'bold'}}>Compare More</span></Link>
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
