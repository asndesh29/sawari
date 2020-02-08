/* eslint-disable no-nested-ternary */
import React from 'react';
import Collapsible from 'react-collapsible';
import { Icon } from '@blueprintjs/core';
import { AiOutlineClose } from 'react-icons/ai';
import { GoCheck } from 'react-icons/go';
import carDetailsObj from '../../../productDetails/components/details/productDetailsObj';
import bikeDetailsObj from '../../../productDetails/components/details/bikeDetailsObj';

const arrSchema = {
  overview: 'CarVarientOverview',
  keySpecifications: 'CarVarientKeySpecification',
  'Engine and Transmission': 'CarVarientEngineTransmission',
  'Fuel & Performance': 'CarVarientFuelPerformance',
  'Suspension, Steering & Brakes': 'CarVarientSuspensionSteeringBreak',
  'Dimensions & Capacity': 'CarVarientDimentionCapacity',
  keyFeatures: 'CarVarientKeyFeatures',
  'Comfort & Convenience': 'CarVarientComfortConvenience',
  Interior: 'CarVarientInterior',
  Exterior: 'CarVarientExterior',
  Safety: 'CarVarientSafty',
  'Entertainment & Communication': 'CarVarientEntertainmentCommunication',
};

const arrBike = {
  overview: 'BikeVarientOverview',
  keySpecifications: 'BikeVarientKeySpecification',
  keyFeatures: 'BikeVarientKeyFeaturs',
  'Engine and Transmission': 'BikeVarientEngineTransmission',
  'Features and Safety': 'BikeVarientFeatursSafety',
  'Mileage and Performance': 'BikeVarientMileagePerformance',
  'Chassis and Suspension': 'BikeVarientChassisSuspension',
  'Dimensions and Capacity': 'BikeVarientDimensionCapacity',
  Electricals: 'BikeVarientElectricals',
  'Tyres and Brakes': 'BikeVarientTyresBrakes',
};

const triggerElement = (label, productList) => {
  const length = productList.length;
  const widthOfDiv = (100 - 10) / length;
  return (
    label === 'Overview'
      ? (
        <div className="specification-collapse-element">
          <div style={{ width: '100%', height: '100%', background: '#f1f1f1', display: 'flex' }}>
            <div style={{ width: '10%', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginLeft: 10, fontSize: 20 }}>{label}</span>
            </div>
            {productList.map((obj, idx, arr) => (
              <div style={{ width: `${widthOfDiv}%`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', height: '100%', borderLeft: '1px solid #f1f1f1' }}>
                <span style={{ padding: 5, fontSize: 20 }}>{obj.name}</span>
                {(arr.length === idx + 1) && <Icon icon="chevron-down" />}
              </div>
            ))}
          </div>
        </div>
      )
      : (
        <div className="specification-collapse-element">
          <span style={{ marginLeft: 10, fontSize: 20 }}>{label}</span>
          <Icon icon="chevron-down" iconSize={15} color="black" />
        </div>
      )
  );
};

const containerElementFeaturesWithYesNo = (key, value) => {
  return (
    <div className="container-element">
      <span style={{ color: '#9a9a9a' }}>{key}</span>
      {value ? <GoCheck color="green" size={20} /> : <AiOutlineClose color="red" size={20} />}
    </div>
  );
};

const containerElementWithvalue = (label, key, arr, productList, triggerLabel) => {
  const lengthOfArray = arr.length;
  const widthOfDiv = (100 - 10) / lengthOfArray;
  // console.log('widthOfDiv', widthOfDiv);
  console.log('container element with value', label, key, arr, productList, triggerLabel);
  return (
    <div className="container-element">
      <div style={{ width: '10%', display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', height: '100%' }}>
        <span style={{ color: '#9a9a9a', padding: 5 }}>{label}</span>
      </div>
      {arr.map((obj) => (
        <div style={{ width: `${widthOfDiv}%`, display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', height: '100%', borderLeft: '1px solid #f1f1f1' }}>
          {triggerLabel === 'Key Featurs' ? (obj[key] ? <Icon icon="tick" color="green" style={{ marginLeft: 10 }} /> : <Icon icon="cross" color="red" style={{ marginLeft: 10 }} />) : <span style={{ padding: 5 }}>{obj[key]}</span>}
        </div>
      ))}
    </div>
  );
};

const collapseContent = (objArr, label, keyObj) => {
  console.log('obj in collapse container', objArr, label, keyObj);
  return (
    <div className="specification-collapse-container">
      {Object.values(keyObj.labels).map((l, idx) => containerElementWithvalue(l, Object.keys(keyObj.labels)[idx], objArr, keyObj, label))}
    </div>
  );
};

const collapseHandler = (lable, objArr, keyObj) => {
  console.log('collapse Handler', objArr, lable,);
  return (
    <Collapsible open={lable === 'Overview'} trigger={triggerElement(lable, objArr)} transitionTime={200}>
      {collapseContent(objArr, lable, keyObj)}
    </Collapsible>
  );
};

class Specification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapseId: 0 };
  }

  collapseOpenHandler = (id) => {
    this.setState({ collapseId: id });
  }


  render() {
    // console.log('project detials in Onj in specification', productDetailsObj);
    const { collapseId } = this.state;
    const { productList, main } = this.props;
    const variantsDetailsList = [];
    console.log('ProductList', productList);
    productList.forEach((v) => {
      const allCarDetails = {};
      Object.keys(arrSchema).forEach((k) => {
        allCarDetails[k] = main.initialData[arrSchema[k]].find((d) => d.varientId === v.id);
      });
      variantsDetailsList.push(allCarDetails);
    });
    console.log('variantsDetailsList', variantsDetailsList);
    // console.log(Object.keys(productList[0].specifications));
    return (
      <div className="specification">
        {collapseHandler('Overview', variantsDetailsList.map((v) => v.overview), carDetailsObj.overview)}
        {collapseHandler('Key Specification', variantsDetailsList.map((v) => v.keySpecifications), carDetailsObj.keySpecifications)}
        {collapseHandler('Key Featurs', variantsDetailsList.map((v) => v.keyFeatures), carDetailsObj.keyFeatures)}
        {Object.keys(carDetailsObj.specifications).map((topic, idx) => collapseHandler(topic, variantsDetailsList.map((v) => v[topic]), carDetailsObj.specifications[topic]))}
      </div>
    );
  }
}
export default Specification;
