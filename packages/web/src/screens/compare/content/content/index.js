import React from 'react';
import { Button } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import SelectProduct from './SelectProductMenuForCompare';
import CompareResult from './CompareResult';
import productDetailsObj from '../../../productDetails/components/details/productDetailsObj';

const findProductDetails = (id, allProducts) => {
  return allProducts.find((p) => p.id === id);
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pId1: 1, pId2: 3, pId3: null, pId4: null, compareResult: null };
  }

  componentWillMount() {
    const { match } = this.props;
    const { pId1, pId2, pId3, pId4 } = match.params;
    this.setState({ pId1: parseInt(pId1, 10), pId2: parseInt(pId2, 10), pId3: parseInt(pId3, 10), pId4: parseInt(pId4, 10) });
  }

  showMenuHandler = (todo) => {
    console.log('main showmenuHandler called', todo);
    this.setState({ ...todo });
  }

  showCompareResult = () => {
    const { main } = this.props;
    const { pId1, pId2, pId3, pId4 } = this.state;
    const selectedProductList = [pId1, pId2, pId3, pId4].filter(p => p).map(p => findProductDetails(p, main.initialData.vehicleBrandProduct)).map((obj) => ({ ...productDetailsObj, ...obj }));
    this.setState({ compareResult: selectedProductList });
  }

  render() {
    const { pId1, pId2, pId3, pId4, compareResult } = this.state;
    console.log('state value in main comapre page', this.state);
    return (
      <div className="content-body">
        <div className="selector">
          <SelectProduct {...this.props} pId={pId1} type="pId1" showMenuHandler={this.showMenuHandler} />
          <SelectProduct {...this.props} pId={pId2} type="pId2" showMenuHandler={this.showMenuHandler} />
          <SelectProduct {...this.props} pId={pId3} type="pId3" showMenuHandler={this.showMenuHandler} />
          <SelectProduct {...this.props} pId={pId4} type="pId4" showMenuHandler={this.showMenuHandler} />
        </div>
        <div className="button">
          <Button text="Compare Now" style={{ background: '#FF4202', color: 'white', width: 200, height: 40 }} onClick={this.showCompareResult} />
        </div>
        <div className="compare-result">
          {compareResult ? <CompareResult {...this.props} productList={compareResult} /> : null}
        </div>
      </div>
    );
  }
}
export default Index;
