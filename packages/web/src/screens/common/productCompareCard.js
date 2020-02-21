import React from 'react';
import { Link } from 'react-router-dom';
import { ENDPOINT } from '../../config';

const findModelDetails = (id, modelList) => {
  const model = modelList.find(m => m.id === id);
  return model;
};

const findProductDetails = (id, variantList, modelList) => {
  const variantDetails = variantList.find((p) => p.id === id);
  const modelDetails = findModelDetails(variantDetails.modelId, modelList);

  return { model: modelDetails, variant: variantDetails };
};

export default (obj, props) => {
  console.log('all Products', obj, props);
  const { main, currentProductDetails } = props;
  const pro1 = findProductDetails(obj.pId1, main.initialData.variantList, main.initialData.vehicleModel);
  const pro2 = findProductDetails(obj.pId2, main.initialData.variantList, main.initialData.vehicleModel);
  return (
    <div style={{ height: 'auto', width: 'auto', margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, border: '2px solid #f5f5f5' }}>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={`${ENDPOINT}/model_image/${pro1.model.image}`} alt={pro1.model.name} style={{ height: 160, width: 200 }} />
          <div style={{ marginRight: -15, marginLeft: -15, zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', height: 30, width: 30, borderRadius: 30, color: 'white' }}><span>VS</span></div>
          <img src={`${ENDPOINT}/model_image/${pro2.model.image}`} alt={pro2.model.image} style={{ height: 160, width: 200 }} />
        </div>
        <div style={{ width: '100%', height: 'auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '50%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 16 }}>{pro1.variant.name}</span>
            <span style={{ color: '#ff4202 '}}>{`रु. ${pro1.variant.exShowRoomPrice / 100000} लाख  `}</span>
          </div>
          <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 16 }}>{pro2.variant.name}</span>
            <span style={{ color: '#ff4202 '}}>{`रु. ${pro1.variant.exShowRoomPrice / 100000} लाख  `}</span>
          </div>
        </div>
        <Link
          to={`/compare/${currentProductDetails.stypeId === 1 ? 'cars' : 'bikes'}/${pro1.variant.name.replace(/\s/g, '')}-${pro1.variant.id}/${pro2.variant.name.replace(/\s/g, '')}-${pro2.variant.id}`.toLocaleLowerCase()}
          style={{ textDecoration: 'none' }}
        >
          <div style={{ marginTop: 10, border: '1px solid #f75d34', padding: 10, margin: 10, textAlign: 'center' }}>
            <span style={{ color: '#f75d34' }}>{`${pro1.variant.name} vs ${pro2.variant.name}`}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
