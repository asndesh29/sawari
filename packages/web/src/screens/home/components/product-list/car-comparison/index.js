/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import HorizontalScrollView from 'react-horizontal-scrolling-menu';
import { Redirect, Link } from 'react-router-dom';
import { Card, Button } from '@blueprintjs/core';
import productCompareCard from '../../../../common/productCompareCard';

const carComparisonList = [
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
];

// const MoreComparison = () => {
//   return (
//     <div style={{ margin: 0, height: 'auto', width: 300, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #f5f5f5' }}>
//       <div style={{ border: '1px solid #757575', height: 100, width: 100, borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//         <span style={{ fontSize: 25, color: '#757575' }}>More</span>
//         <FiMoreHorizontal size={30} color="#757575" />
//       </div>
//     </div>
//   );
// };

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
    const { main, updateMainValue, withScroll } = this.props;
    const { showProductDtails, selectedTabId } = this.state;
    return (
      <Card style={{ background: 'white', width: '90%', marginTop: 10 }}>
        {withScroll && <h2 style={{ margin: 0 }}>Popular Car Comparisons</h2>}
        <div style={{ marginRight: 20 }}>
          <div elevation={0} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
            {/* {main.initialData.vehicleBrandProduct ? [carComparisonList.map(p => ProvinceDesign(p, main.initialData.vehicleBrandProduct)), <SelectProductForComparison {...this.props} />] : []} */}
            <div style={{ width: '100%', textAlign: 'center', height: 'auto' }}>
              <HorizontalScrollView
                // wheel
                data={main.initialData.vehicleBrandProduct ? [...carComparisonList.map(p => productCompareCard(p, { ...this.props, currentProductDetails: { stypeId: 1 } }))] : []}
                arrowRight={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-right" />}
                arrowLeft={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-left" />}
                onSelect={(key) => console.log('seleceed', key)}
                clickWhenDrag={false}
                alignOnResize
                hideSingleArrow
                hideArrows
                scrollBy={3}
                clickWhenDrag={false}
              />
            </div>
          </div>
        </div>
        <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
          <Link to="/compare/car"><span style={{ fontWeight: 'bold' }}>Compare More</span></Link>
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
