import React from 'react';
import { Link } from 'react-router-dom';
import { ENDPOINT } from '../../config';

const findProductDetails = (id, allProducts) => {
  return allProducts.find(p => p.id === id);
};

export default (obj, allProducts, type) => {
  console.log('all Products', allProducts);
  const pro1 = findProductDetails(obj.pId1, allProducts);
  const pro2 = findProductDetails(obj.pId2, allProducts);
  return (
    <div style={{ height: 'auto', width: 'auto', margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, border: '2px solid #f5f5f5' }}>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={`${ENDPOINT}/images/${pro1.image}`} alt={pro1.brandName} style={{ height: 160, width: 200 }} />
          <div style={{ marginRight: -15, marginLeft: -15, zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', height: 30, width: 30, borderRadius: 30, color: 'white' }}><span>VS</span></div>
          <img src={`${ENDPOINT}/images/${pro2.image}`} alt={pro2.brandName} style={{ height: 160, width: 200 }} />
        </div>
        <div style={{ width: '100%', height: 'auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '50%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 16 }}>{pro1.name}</span>
            <span>{`NRs ${pro1.price}/-`}</span>
          </div>
          <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 16 }}>{pro2.name}</span>
            <span>{`NRs ${pro2.price}/-`}</span>
          </div>
        </div>
        <Link to={`/compare/${type}/${obj.pId1}/${obj.pId2}`} style={{ textDecoration: 'none' }}>
          <div style={{ marginTop: 10, border: '1px solid #f75d34', padding: 10, margin: 10, textAlign: 'center' }}>
            <span style={{ color: '#f75d34' }}>{`${pro1.name} vs ${pro2.name}`}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
