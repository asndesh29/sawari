import React from 'react';
import productComparCard from '../../../common/productCompareCard';
import { carCompare, bikeCompare } from '../../../common/compareData';

class Compare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { main, variantId, currentProductDetails } = this.props;
    console.log('Props in comparison', this.props);
    const carComparisonList = carCompare.filter(id => id !== variantId).map((id) => ({ pId1: variantId, pId2: id }));
    const bikeComparisonList = bikeCompare.map((id) => ({ pId1: variantId, pId2: id }));
    const comparisonList = currentProductDetails.stypeId === 1 ? carComparisonList : bikeComparisonList;
    console.log('Props in comparison', comparisonList);
    return (
      <div>
        {main.initialData.vehicleBrandProduct ? [...comparisonList.map((p) => productComparCard(p, this.props))] : []}
      </div>
    );
  }
}
export default Compare;
