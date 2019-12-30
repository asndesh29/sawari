import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import HorizontalScrollView from 'react-horizontal-scrolling-menu';
import { Redirect, Link } from 'react-router-dom';
import { Card, Tabs, Tab, Button} from '@blueprintjs/core';
import { ENDPOINT } from '../../../../../config';

{/* <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
          <span style={{ fontSize: 16 }}>{pro1.name}</span>
          <span>{`NRs ${pro1.price}/-`}</span>
        </div> */}

const findProductDetails = (id, allProducts) => {
  return allProducts.find(p => p.id === id);
};

const carComparisonList = [
  { id: 1, pId1: 1, pId2: 4, compCount: 10 },
  { id: 1, pId1: 1, pId2: 4, compCount: 10 },
  { id: 1, pId1: 1, pId2: 4, compCount: 10 },
  { id: 1, pId1: 1, pId2: 4, compCount: 10 },
  { id: 1, pId1: 1, pId2: 4, compCount: 10 },
];

const ProvinceDesign = (obj, allProducts) => {
  console.log('all Products', allProducts);
  const pro1 = findProductDetails(obj.pId1, allProducts);
  const pro2 = findProductDetails(obj.pId2, allProducts);
  return (
    <div style={{ height: 'auto', width: 'auto', margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, border: "2px solid #f5f5f5" }}>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={`${ENDPOINT}/images/${pro1.image}`} alt={pro1.brandName} style={{ height: 160, width: 200 }} />
          <div style={{ marginRight: -15, marginLeft: -15, zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', height: 30, width: 30, borderRadius: 30, color: 'white' }}><span>VS</span></div>
          <img src={`${ENDPOINT}/images/${pro2.image}`} alt={pro2.brandName} style={{ height: 160, width: 200 }} />
        </div>
        <div style={{ width: '100%', height: 'auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '50%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 16 }}>{pro1.name}</span>
            <span>{`NRs ${pro1.price}/-`}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 16 }}>{pro2.name}</span>
            <span>{`NRs ${pro2.price}/-`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    const { main, updateMainValue } = this.props;
    const { showProductDtails, selectedTabId } = this.state;
    return (
      <div style={{ background: 'white', width: '90%', marginTop: 10 }}>
        <h2 style={{ margin: 0 }}>Popular Car Comparisons</h2>
        <div style={{ marginRight: 20 }}>
          <div elevation={0} style={{ display: 'flex', flexWrap: 'wrap'}}>
            {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}

            <div style={{ width: '100%', textAlign: 'center', height: '100%'}}>
              <HorizontalScrollView
                // wheel
                data={main.initialData.vehicleBrandProduct ? carComparisonList.map(p => ProvinceDesign(p, main.initialData.vehicleBrandProduct)) : []}
                arrowRight={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-right" />}
                arrowLeft={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-left" />}
                // onSelect={(key) => console.log('seleceed', key)}
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
      </div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
