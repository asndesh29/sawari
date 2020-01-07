import React from 'react';
import Collapsible from 'react-collapsible';
import { Icon } from '@blueprintjs/core';
import { AiOutlineClose } from 'react-icons/ai';
import { GoCheck } from 'react-icons/go';

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
      {value ? <GoCheck color="green" size={20} /> : <AiOutlineClose color="red" size={20} /> }
    </div>
  );
};

const containerElementWithvalue = (label, key, arr, productList, triggerLabel) => {
  const lengthOfArray = arr.length;
  const widthOfDiv = (100 - 10) / lengthOfArray;
  // console.log('widthOfDiv', widthOfDiv);
  console.log('container element with value', triggerLabel);
  return (
    <div className="container-element">
      <div style={{ width: '10%', display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', height: '100%' }}>
        <span style={{ color: '#9a9a9a', padding: 5 }}>{label}</span>
      </div>
      {arr.map((obj) => (
        <div style={{ width: `${widthOfDiv}%`, display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', height: '100%', borderLeft: '1px solid #f1f1f1' }}>
          {triggerLabel === 'Key Featurs' ? (obj[key] ? <Icon icon="tick" color="green" style={{marginLeft: 10 }}/> : <Icon icon="cross" color="red" style={{marginLeft: 10 }}/>) : <span style={{ padding: 5 }}>{obj[key]}</span>}
        </div>
      ))}
    </div>
  );
};

const collapseContent = (objArr, label, productList) => {
  // console.log('obj in collapse container', objArr, label);
  return (
    <div className="specification-collapse-container">
      {Object.values(objArr[0].labels).map((l, idx) => containerElementWithvalue(l, Object.keys(objArr[0].labels)[idx], objArr, productList, label))}
    </div>
  );
};

const collapseHandler = (lable, arrObj, productList) => {
  // console.log('collapse Handler', arrObj, lable);
  return (
    <Collapsible open={lable === 'Overview'} trigger={triggerElement(lable, productList)} transitionTime={200}>
      {collapseContent(arrObj, lable, productList)}
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
    const { productList } = this.props;
    // console.log(Object.keys(productList[0].specifications));
    return (
      <div className="specification">
        {collapseHandler('Overview', productList.map((pd) => pd.overview), productList)}
        {collapseHandler('Key Specification', productList.map((pd) => pd.keySpecifications), productList)}
        {collapseHandler('Key Featurs', productList.map((pd) => pd.keyFeatures), productList)}
        {Object.keys(productList[0].specifications).map((topic, idx) => collapseHandler(topic, productList.map((pd) => pd.specifications[topic]), productList))}
      </div>
    );
  }
}
export default Specification;
