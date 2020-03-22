/* eslint-disable react/no-deprecated */
import React from 'react';
import { Button, Switch } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import SelectProduct from './SelectProductMenuForCompare';
import CompareResult from './compare-result';
import productDetailsObj from '../../../productDetails/components/details/productDetailsObj';

const findProductDetails = (id, allProducts) => {
  return allProducts.find((p) => p.id === id);
};

const findVariantId = (id, variantList) => {
  // console.log('find Variant List', id, variantList);
  const variant = variantList.find((v) => `${v.name.replace(/\s/g, '')}-${v.id}`.toLocaleLowerCase() === id);
  return variant ? variant.id : variant;
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pId1: null, pId2: null, pId3: null, pId4: null, compareResult: null, hideCommon: false, expandAll: false };
  }

  componentWillMount() {
    const { match, main } = this.props;
    const { pId1, pId2, pId3, pId4 } = match.params;
    this.setState({
      pId1: findVariantId(pId1, main.initialData.variantList),
      pId2: findVariantId(pId2, main.initialData.variantList),
      pId3: findVariantId(pId3, main.initialData.variantList),
      pId4: findVariantId(pId4, main.initialData.variantList),
    });
  }

  showMenuHandler = (todo) => {
    // console.log('main showmenuHandler called', todo);
    this.setState({ ...todo });
  }

  showCompareResult = () => {
    const { main } = this.props;
    const { pId1, pId2, pId3, pId4 } = this.state;
    const selectedProductList = [pId1, pId2, pId3, pId4].filter((p) => p).map((p) => findProductDetails(p, main.initialData.variantList)).map((obj) => ({ ...productDetailsObj, ...obj }));
    this.setState({ compareResult: selectedProductList });
  }

  render() {
    const { pId1, pId2, pId3, pId4, compareResult, hideCommon, expandAll } = this.state;
    // console.log('state value in main comapre page', this.state);
    const isShowComapreButton = Object.values({ pId1, pId2, pId3, pId4 }).filter((v) => v).length > 0;
    return (
      <div className="content-body">
        <div className="selector">
          <div className="selector-pair-one">
            <SelectProduct {...this.props} pId={pId1} type="pId1" showMenuHandler={this.showMenuHandler} />
            <SelectProduct {...this.props} pId={pId2} type="pId2" showMenuHandler={this.showMenuHandler} />
          </div>
          <div className="selector-pair-two">
            <SelectProduct {...this.props} pId={pId3} type="pId3" showMenuHandler={this.showMenuHandler} />
            <SelectProduct {...this.props} pId={pId4} type="pId4" showMenuHandler={this.showMenuHandler} />
          </div>
        </div>
        <div className="button">
          { isShowComapreButton && <Button text="Compare Now" style={{ background: '#FF4202', color: 'white', width: 200, height: 40 }} onClick={this.showCompareResult} />}
        </div>
        {compareResult && (
        <div style={{ width: '90%', display: 'flex', justifyContent: 'flex-end', margin: 0 }}>
          <Switch
            large
            label="Expand All"
            alignIndicator="right"
            onChange={() => this.setState({ expandAll: !expandAll })}
          />
          <Switch
            large
            label="Hide Common"
            alignIndicator="right"
            style={{ marginRight: 10 }}
            onChange={(e) => this.setState({ hideCommon: !hideCommon })}
          />
        </div>
        )}
        <div className="compare-result">
          {compareResult && <CompareResult expandAll={expandAll} hideCommon={hideCommon} {...this.props} productList={compareResult} />}
        </div>
      </div>
    );
  }
}
export default Index;
Index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
