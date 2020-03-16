import React from 'react';
import PropTypes from 'prop-types';
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
  // console.log('all Products', obj, props);
  const { main, currentProductDetails } = props;
  const pro1 = findProductDetails(obj.pId1, main.initialData.variantList, main.initialData.vehicleModel);
  const pro2 = findProductDetails(obj.pId2, main.initialData.variantList, main.initialData.vehicleModel);
  return (
    <div className="product-compare-container">
      <div className="compare-content">
        <div className="image-compare">
          <img src={`${ENDPOINT}/model_image/${pro1.model.image}`} alt={pro1.model.name} />
          <div className="vs-div">
            <span>VS</span>
          </div>
          <img src={`${ENDPOINT}/model_image/${pro2.model.image}`} alt={pro2.model.image} />
        </div>
        <div className="discription-content">
          <div className="description">
            <span style={{ fontSize: 16 }}>{pro1.variant.name}</span>
            <span style={{ color: '#f75d34 '}}>{`रु. ${pro1.variant.exShowRoomPrice / 100000} लाख  `}</span>
          </div>
          <div className="description">
            <span style={{ fontSize: 16 }}>{pro2.variant.name}</span>
            <span style={{ color: '#f75d34 '}}>{`रु. ${pro1.variant.exShowRoomPrice / 100000} लाख  `}</span>
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
