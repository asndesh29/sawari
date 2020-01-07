import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { ENDPOINT } from '../../../../config';

const findProductDetails = (id, allProducts) => {
  console.log('parameter in findProductDetails', id, allProducts);
  return allProducts.find(p => p.id === id);
};

const showDetails = (type, id, allProducts) => {
  const pro1 = findProductDetails(id, allProducts);
  return (
    <div style={{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {pro1 && <img src={`${ENDPOINT}/images/${pro1.image}`} alt={pro1.brandName} style={{ height: 160, width: '100%' }} /> }
      {pro1 && (
      <div style={{marginTop: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: 16 }}>{pro1.name}</span>
        <span>{`NRs ${pro1.price}/-`}</span>
      </div>
      )}
    </div>
  );
};

const showAddProduct = (type, pId, showMenuHandler) => {
  return (
    <div style={{ width: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200, flexDirection: 'column' }}>
      <AiOutlinePlusCircle size={70} color="#757575" onClick={() => showMenuHandler({ showForProduct: type })} />
      <span style={{ color: '#757575'}}>Add Vehicle</span>
    </div>
  );
};

class SelectProductForComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { showMenuHandler, main, pId, type } = this.props;
    console.log('props in show Product', this.props);
    return (
      <div style={{ margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, border: '2px solid #f5f5f5', width: 260, height: 'auto' }}>
        {pId ? showDetails(type, pId, main.initialData.vehicleBrandProduct) : showAddProduct(type, pId, showMenuHandler)}
      </div>
    );
  }
}
export default SelectProductForComparison;
