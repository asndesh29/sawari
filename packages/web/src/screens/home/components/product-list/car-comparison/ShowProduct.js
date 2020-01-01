import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { ENDPOINT } from '../../../../../config';

const findProductDetails = (id, allProducts) => {
  console.log('parameter in findProductDetails', id, allProducts);
  return allProducts.find(p => p.id === id);
};

const showDetails = (type, id, allProducts) => {
  const pro1 = type === 1 ? findProductDetails(id, allProducts) : null;
  const pro2 = type === 2 ? findProductDetails(id, allProducts) : null;

  return (
    <div style={{ height: 'auto', width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {pro1 && <img src={`${ENDPOINT}/images/${pro1.image}`} alt={pro1.brandName} style={{ height: 160, width: 200 }} /> }
          {/* {(pro1 || pro2) && <div style={{ marginRight: -15, marginLeft: -15, zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', height: 30, width: 30, borderRadius: 30, color: 'white' }}><span>VS</span></div>} */}
          {pro2 && <img src={`${ENDPOINT}/images/${pro2.image}`} alt={pro2.brandName} style={{ height: 160, width: 200 }} /> }
        </div>
        <div style={{ width: '100%', height: 'auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          {pro1 && (
          <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '50%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 16 }}>{pro1.name}</span>
            <span>{`NRs ${pro1.price}/-`}</span>
          </div>
          )}
          {pro2 && (
            <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: 16 }}>{pro2.name}</span>
              <span>{`NRs ${pro2.price}/-`}</span>
            </div>
          )}
        </div>
        {(pro1 && pro2) && (
          <div style={{ marginTop: 10, border: '1px solid #f75d34', padding: 10, margin: 10 }}>
            <span style={{ color: '#f75d34' }}>{`${pro1.name} vs ${pro2.name}`}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const showAddProduct = (type, showMenuHandler) => {
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
    const { showMenuHandler, main, pId1, pId2 } = this.props;
    console.log('props in show Product', this.props);
    return (
      <div style={{ height: 'auto', width: 'auto', margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, border: '2px solid #f5f5f5' }}>
        {pId1 ? showDetails(1, pId1, main.initialData.vehicleBrandProduct) : showAddProduct(1, showMenuHandler)}
        {(!pId1 && !pId2) && (
        <div style={{ marginRight: -15, marginLeft: -15, zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ height: 200, width: 2, background: '#f1f1f1' }} />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', background: 'black', height: 30, width: 30, borderRadius: 30, color: 'white' }}>
            <span>VS</span>
          </div>
        </div>
        )}
        {pId2 ? showDetails(2, pId2, main.initialData.vehicleBrandProduct) : showAddProduct(2, showMenuHandler)}
      </div>
    );
  }
}
export default SelectProductForComparison;
