/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-lonely-if */
import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import { Icon, Switch } from '@blueprintjs/core';
import { AiOutlineClose } from 'react-icons/ai';
import { GoCheck } from 'react-icons/go';
import productDetailsObj from './productDetailsObj';
import bikeDetailsObj from './bikeDetailsObj';

const carCollapseLablel = { 'Key Features': true, 'Key Specification': true, ...productDetailsObj.specifications };

const bikeCollapseLablel = { 'Key Features': true, 'Key Specification': true, ...bikeDetailsObj.specifications };

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

const triggerElement = (label, collapseObj, collapseOpenHandler, collapseColoseHandler) => {
  return (
    <div
      className="specification-collapse-element"
      onClick={() => {
        if (collapseObj[label]) {
          collapseColoseHandler(label);
        } else {
          collapseOpenHandler(label)
        }
      }
      }
    >
      <span>{label}</span>
      <Icon icon="chevron-down" iconSize={15} color="black" />
    </div>
  );
};

const containerElementFeaturesWithYesNo = (key, value) => {
  if (key === 'Connectivity') {
    return (
      <div className="container-element">
        <span style={{ color: '#9a9a9a', padding: 5 }}>{key}</span>
        <span style={{ padding: 5 }}>{value}</span>
      </div>
    );
  }
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

const collapseContent = (obj, label, keyFeatures) => {
  const { labels } = obj;
  // console.log('obj in collapse container', obj, labels);
  return (
    <div className="specification-collapse-container">
      {(label === 'Key Features' || label === 'Interior' || label === 'Exterior' || label === 'Comfort & Convenience' || label === 'Safety' || label === 'Entertainment & Communication')
        ? Object.values(labels).map((l, idx) => containerElementFeaturesWithYesNo(l, keyFeatures[Object.keys(labels)[idx]]))
        : Object.values(labels).map((l, idx) => containerElementWithvalue(l, keyFeatures[Object.keys(labels)[idx]]))}
    </div>
  );
};

const collapseHandler = (lable, obj, keyFeatures, collapseObj, collapseOpenHandler, collapseColoseHandler) => {
  // console.log('EXPAND ALL', collapseObj);
  return (
    <Collapsible
      // onOpen={() => collapseOpenHandler(lable)}
      // onClose={() => collapseColoseHandler(lable)}
      // // handleTriggerClick={(e) => console.log('trigger handler', e)}
      open={collapseObj[lable]}
      trigger={triggerElement(lable, collapseObj, collapseOpenHandler, collapseColoseHandler)}
      transitionTime={200}
    >
      {collapseContent(obj, lable, keyFeatures)}
    </Collapsible>
  );
};

class Specification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapseObj: {}, expandAll: false };
  }

  componentWillMount() {
    const { currentProductDetails } = this.props;
    if (currentProductDetails.stypeId === 1) {
      const initialCollapseLableValue = Object.keys(carCollapseLablel).reduce((obj, n) => {
        obj = { ...obj, [n]: false };
        return obj;
      }, {});
      this.setState({ collapseObj: initialCollapseLableValue });
    } else {
      const initialCollapseLableValue = Object.keys(bikeCollapseLablel).reduce((obj, n) => {
        obj = { ...obj, [n]: false };
        return obj;
      }, {});
      this.setState({ collapseObj: initialCollapseLableValue });
    }
  }

  expandAllHandler = async () => {
    await this.setState({ expandAll: !this.state.expandAll});
    const { currentProductDetails } = this.props;
    const { expandAll } = this.state;
    if (expandAll) {
      if (currentProductDetails.stypeId === 1) {
        const initialCollapseLableValue = Object.keys(carCollapseLablel).reduce((obj, n) => {
          obj = { ...obj, [n]: true };
          return obj;
        }, {});
        this.setState({ collapseObj: initialCollapseLableValue });
      } else {
        const initialCollapseLableValue = Object.keys(bikeCollapseLablel).reduce((obj, n) => {
          obj = { ...obj, [n]: true };
          return obj;
        }, {});
        this.setState({ collapseObj: initialCollapseLableValue });
      }
    } else {
      if (currentProductDetails.stypeId === 1) {
        const initialCollapseLableValue = Object.keys(carCollapseLablel).reduce((obj, n) => {
          obj = { ...obj, [n]: false };
          return obj;
        }, {});
        this.setState({ collapseObj: initialCollapseLableValue });
      } else {
        const initialCollapseLableValue = Object.keys(bikeCollapseLablel).reduce((obj, n) => {
          obj = { ...obj, [n]: false };
          return obj;
        }, {});
        this.setState({ collapseObj: initialCollapseLableValue });
      }
    }
  }

  collapseOpenHandler = (label) => {
    // console.log('open handler called', label);
    const { collapseObj } = this.state;
    this.setState({ collapseObj: { ...collapseObj, [label]: true } });
  }

  collapseColoseHandler = (label) => {
    // console.log('close handler called', label);
    const { collapseObj } = this.state;
    this.setState({ collapseObj: { ...collapseObj, [label]: false } });
  }


  render() {
    // console.log('project detials in Onj in specification', this.props);
    const { collapseObj, expandAll } = this.state;
    const { main, currentProductDetails, variantId } = this.props;
    const { stypeId } = currentProductDetails;
    const allCarDetails = {};
    const allBikeDetails = {};

    if (parseInt(stypeId, 10) === 1) {
      Object.keys(arrSchema).forEach((k) => {
        allCarDetails[k] = main.initialData[arrSchema[k]].find((d) => d.varientId === variantId);
      });
    }

    if (parseInt(stypeId, 10) === 2) {
      Object.keys(arrBike).forEach((k) => {
        allBikeDetails[k] = main.initialData[arrBike[k]].find((d) => d.varientId === variantId);
      });
    }
    // console.log('all Bike details', this.state);

    return (
      <div className="specification">
        <Switch
          onClick={(e) => console.log('switch value', e)}
          label="Expand All"
          large
          style={{ color: 'black', marginRight: 10, textAlign: 'end' }}
          onChange={this.expandAllHandler}
          value={1}
          checked={expandAll}
        />
        { parseInt(stypeId, 10) === 1 && collapseHandler('Key Features', productDetailsObj.keyFeatures, allCarDetails.keyFeatures, collapseObj, this.collapseOpenHandler, this.collapseColoseHandler)}
        { parseInt(stypeId, 10) === 1 && collapseHandler('Key Specification', productDetailsObj.keySpecifications, allCarDetails.keySpecifications, collapseObj, this.collapseOpenHandler, this.collapseColoseHandler)}
        { parseInt(stypeId, 10) === 1 && Object.keys(productDetailsObj.specifications).map((k, idx) => collapseHandler(k, productDetailsObj.specifications[k], allCarDetails[k], collapseObj, this.collapseOpenHandler, this.collapseColoseHandler))}
        { parseInt(stypeId, 10) === 2 && collapseHandler('Key Features', bikeDetailsObj.keyFeatures, allBikeDetails.keyFeatures, collapseObj, this.collapseOpenHandler, this.collapseColoseHandler)}
        { parseInt(stypeId, 10) === 2 && collapseHandler('Key Specification', bikeDetailsObj.keySpecifications, allBikeDetails.keySpecifications, collapseObj, this.collapseOpenHandler, this.collapseColoseHandler)}
        { parseInt(stypeId, 10) === 2 && Object.keys(bikeDetailsObj.specifications).map((k, idx) => collapseHandler(k, bikeDetailsObj.specifications[k], allBikeDetails[k], collapseObj, this.collapseOpenHandler, this.collapseColoseHandler))}
      </div>
    );
  }
}
export default Specification;
Specification.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  currentProductDetails: PropTypes.objectOf(PropTypes.any).isRequired,
  variantId: PropTypes.objectOf(PropTypes.any).isRequired,
  expandAll: PropTypes.bool.isRequired,
};
