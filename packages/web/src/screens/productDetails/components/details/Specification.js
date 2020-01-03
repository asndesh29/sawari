import React from 'react';
import Collapsible from 'react-collapsible';
import { Icon } from '@blueprintjs/core';
import { AiOutlineClose } from 'react-icons/ai';
import { GoCheck } from 'react-icons/go';
import productDetailsObj from './productDetailsObj';

const triggerElement = (label) => {
  return (
    <div className="specification-collapse-element">
      <span>{label}</span>
      <Icon icon="chevron-down" iconSize={15} color="black" />
    </div>
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

const containerElementWithvalue = (key, value) => {
  return (
    <div className="container-element">
      <span style={{ color: '#9a9a9a', padding: 5 }}>{key}</span>
      <span style={{ padding: 5 }}>{value}</span>
    </div>
  );
};

const collapseContent = (obj, label) => {
  const { labels } = obj;
  console.log('obj in collapse container', obj, labels);
  return (
    <div className="specification-collapse-container">
      {label === 'Key Features'
        ? Object.values(labels).map((l, idx) => containerElementFeaturesWithYesNo(l, obj[Object.keys(labels)[idx]]))
        : Object.values(labels).map((l, idx) => containerElementWithvalue(l, obj[Object.keys(labels)[idx]]))}
    </div>
  );
};

const collapseHandler = (lable, obj) => {
  return (
    <Collapsible trigger={triggerElement(lable)} transitionTime={200}>
      {collapseContent(obj, lable)}
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
    console.log('project detials in Onj in specification', productDetailsObj);
    const { collapseId } = this.state;
    return (
      <div className="specification">
        {collapseHandler('Key Features', productDetailsObj.keyFeatures)}
        {Object.keys(productDetailsObj.specifications).map((k, idx) => collapseHandler(k, productDetailsObj.specifications[k]))}
      </div>
    );
  }
}
export default Specification;
