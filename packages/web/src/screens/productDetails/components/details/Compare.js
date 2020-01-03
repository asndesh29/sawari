import React from 'react';
import productComparCard from '../../../common/productCompareCard';

const carComparisonList = [
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
  { id: 1, pId1: 1, pId2: 3, compCount: 10 },
];

class Compare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { main } = this.props;
    return (
      <div>
        {main.initialData.vehicleBrandProduct ? [...carComparisonList.map(p => productComparCard(p, main.initialData.vehicleBrandProduct))] : []}
      </div>
    );
  }
}
export default Compare;
